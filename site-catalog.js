(function(){
  const moneyFmt=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(Number(n||0))+' ₽';
  const escCat=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  let catalogMode='custom';
  let currentCatalogProduct=null;
  let editingCatalogUid=null;

  function initCatalog(){
    const productsCard=root?.querySelector('.fd-products-card');
    if(!productsCard || productsCard.querySelector('.fd-source-tabs')) return;
    const title=productsCard.querySelector('.fd-card-title');
    title.insertAdjacentHTML('afterend',`
      <div class="fd-source-tabs">
        <button type="button" class="fd-source-tab active" data-source="custom">Индивидуальный расчёт</button>
        <button type="button" class="fd-source-tab" data-source="site">Каталог Forma Dom</button>
      </div>
      <div class="fd-site-catalog" hidden>
        <div class="fd-catalog-toolbar">
          <input id="fdCatalogSearch" placeholder="Поиск по каталогу">
          <select id="fdCatalogCategory"><option value="">Все категории</option></select>
        </div>
        <div class="fd-catalog-grid"></div>
      </div>`);
    productsCard.querySelector('.fd-source-tabs').addEventListener('click',e=>{
      const b=e.target.closest('[data-source]'); if(!b)return;
      setCatalogMode(b.dataset.source);
    });
    productsCard.querySelector('#fdCatalogSearch').addEventListener('input',renderSiteCatalog);
    productsCard.querySelector('#fdCatalogCategory').addEventListener('change',renderSiteCatalog);
    productsCard.querySelector('.fd-catalog-grid').addEventListener('click',e=>{
      const b=e.target.closest('[data-catalog-id]'); if(!b)return;
      openCatalogConfigurator(b.dataset.catalogId);
    });
    buildCategoryOptions();
    renderSiteCatalog();
    injectCatalogModal();
  }

  function setCatalogMode(mode){
    catalogMode=mode;
    root.querySelectorAll('.fd-source-tab').forEach(b=>b.classList.toggle('active',b.dataset.source===mode));
    const site=root.querySelector('.fd-site-catalog');
    const custom=root.querySelector('.fd-products');
    site.hidden=mode!=='site';
    custom.style.display=mode==='site'?'none':'';
    const config=root.querySelector('.fd-config');
    if(config) config.style.display=mode==='site'?'none':'';
    if(mode==='site') renderSiteCatalog();
  }

  function buildCategoryOptions(){
    const sel=root.querySelector('#fdCatalogCategory');
    const cats=[...new Set((SITE_CATALOG||[]).flatMap(p=>p.categories||[]))].sort((a,b)=>a.localeCompare(b,'ru'));
    sel.insertAdjacentHTML('beforeend',cats.map(c=>`<option value="${escCat(c)}">${escCat(c)}</option>`).join(''));
  }

  function renderSiteCatalog(){
    const grid=root.querySelector('.fd-catalog-grid'); if(!grid)return;
    const q=(root.querySelector('#fdCatalogSearch')?.value||'').trim().toLowerCase();
    const cat=root.querySelector('#fdCatalogCategory')?.value||'';
    const items=(SITE_CATALOG||[]).filter(p=>(!q||p.title.toLowerCase().includes(q))&&(!cat||(p.categories||[]).includes(cat)));
    grid.innerHTML=items.map(p=>{
      const prices=(p.variants||[]).map(v=>Number(v.price||0)).filter(Boolean);
      const min=prices.length?Math.min(...prices):Number(p.basePrice||0);
      return `<button type="button" class="fd-catalog-card" data-catalog-id="${escCat(p.id)}">
        <span class="fd-catalog-photo">${p.photo?`<img src="${escCat(p.photo)}" loading="lazy" referrerpolicy="no-referrer" alt="${escCat(p.title)}">`:''}</span>
        <span class="fd-catalog-title">${escCat(p.title)}</span>
        <span class="fd-catalog-meta">${escCat((p.categories||[]).slice(0,2).join(' · '))}</span>
        <span class="fd-catalog-price">${min?`от ${moneyFmt(min)}`:'Цена по запросу'}</span>
      </button>`;
    }).join('') || '<div class="fd-empty">Ничего не найдено.</div>';
  }

  function injectCatalogModal(){
    if(document.getElementById('fdCatalogModal'))return;
    document.body.insertAdjacentHTML('beforeend',`<div class="fd-catalog-modal" id="fdCatalogModal" hidden>
      <div class="fd-catalog-dialog">
        <button type="button" class="fd-catalog-close" aria-label="Закрыть">×</button>
        <div class="fd-catalog-dialog-body"></div>
      </div>
    </div>`);
    const modal=document.getElementById('fdCatalogModal');
    modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.fd-catalog-close')) closeCatalogModal();});
    modal.addEventListener('change',handleCatalogConfigChange);
    modal.addEventListener('input',handleCatalogConfigChange);
    modal.addEventListener('click',e=>{const b=e.target.closest('.fd-catalog-add');if(b)addCatalogItem();});
  }

  function variantLabel(v){
    if(v.editions) return v.editions.split(';').map(x=>x.replace(':',' — ')).join(' · ');
    return v.title||'Вариант';
  }

  function parseSiteModifications(raw){
    if(!raw) return [];
    return String(raw).split('|').map((group,groupIndex)=>{
      const parts=group.split(':');
      const label=(parts.shift()||'').trim();
      const options=parts.join(':').split(';').map((item,optionIndex)=>{
        const text=String(item||'').trim();
        if(!text) return null;
        const m=text.match(/^(.*?)(?:=\s*\+?(-?[\d\s.,]+))?$/);
        const optionLabel=(m?.[1]||text).trim();
        const priceDelta=m?.[2] ? Number(String(m[2]).replace(/\s/g,'').replace(',','.'))||0 : 0;
        return {id:`m${groupIndex}_${optionIndex}`,label:optionLabel,priceDelta};
      }).filter(Boolean);
      return label&&options.length ? {id:`mod_${groupIndex}`,label,options} : null;
    }).filter(Boolean);
  }

  function currentModifierSelections(){
    const out={};
    document.querySelectorAll('#fdCatalogModal [data-catalog-mod]').forEach(sel=>{out[sel.dataset.catalogMod]=sel.value;});
    return out;
  }

  function selectedModifierData(){
    const groups=parseSiteModifications(currentCatalogProduct?.modifications);
    const selections=currentModifierSelections();
    return groups.map(group=>{
      const option=group.options.find(o=>String(o.id)===String(selections[group.id]))||group.options[0];
      return {group,option};
    });
  }
  function selectedCatalogVariant(){
    const id=document.getElementById('fdCatalogVariant')?.value||'';
    return (currentCatalogProduct?.variants||[]).find(v=>String(v.id)===String(id))||null;
  }
  function inferDims(product,variant){
    const text=(variant?.editions||'')+' '+(variant?.title||'');
    const m=text.match(/(?:Размер[^:]*:|[- ])\s*(\d{3,4})\s*[хx×]\s*(\d{3,4})(?:\s*[хx×]\s*(\d{3,4}))?/i);
    if(m) return [m[1],m[2],m[3]].filter(Boolean).join('x')+' мм';
    return product?.dimensions||'';
  }

  function openCatalogConfigurator(id,item=null){
    const product=(SITE_CATALOG||[]).find(p=>String(p.id)===String(id)); if(!product)return;
    currentCatalogProduct=product;
    editingCatalogUid=item?.uid||null;
    const variants=product.variants||[];
    const currentVariantId=item?.catalogVariantId || variants[0]?.id || '';
    const variant=variants.find(v=>String(v.id)===String(currentVariantId))||variants[0]||null;
    const base=item?.catalogBasePrice ?? variant?.price ?? product.basePrice ?? 0;
    const markup=item?.catalogMarkupPercent ?? 0;
    const dims=item?.dimensionsText || inferDims(product,variant);
    const modificationGroups=parseSiteModifications(product.modifications);
    const savedMods=item?.catalogModSelections||{};
    const body=document.querySelector('#fdCatalogModal .fd-catalog-dialog-body');
    body.innerHTML=`
      <div class="fd-catalog-config-head">
        <div class="fd-catalog-config-photo">${product.photo?`<img src="${escCat(product.photo)}" referrerpolicy="no-referrer" alt="${escCat(product.title)}">`:''}</div>
        <div><h2>${escCat(product.title)}</h2><div class="fd-catalog-meta">${escCat((product.categories||[]).join(' · '))}</div></div>
      </div>
      <div class="fd-catalog-config-grid">
        ${variants.length?`<label>Конфигурация с сайта<select id="fdCatalogVariant">${variants.map(v=>`<option value="${escCat(v.id)}" ${String(v.id)===String(currentVariantId)?'selected':''}>${escCat(variantLabel(v))} — ${moneyFmt(v.price)}</option>`).join('')}</select></label>`:''}
        ${modificationGroups.map(group=>`<label>${escCat(group.label)}<select data-catalog-mod="${escCat(group.id)}">${group.options.map((option,index)=>`<option value="${escCat(option.id)}" ${String(savedMods[group.id]??group.options[0]?.id)===String(option.id)?'selected':''}>${escCat(option.label)}${option.priceDelta?` (+${moneyFmt(option.priceDelta)})`:''}</option>`).join('')}</select></label>`).join('')}
        <label>Базовая цена, ₽<input id="fdCatalogBasePrice" type="number" min="0" step="100" value="${Number(base||0)}"></label>
        <label>Индивидуальный размер<select id="fdCatalogMarkup"><option value="0" ${markup==0?'selected':''}>Нет</option><option value="15" ${markup==15?'selected':''}>+15%</option><option value="20" ${markup==20?'selected':''}>+20%</option><option value="25" ${markup==25?'selected':''}>+25%</option></select></label>
        <label>Габариты для КП<input id="fdCatalogDims" value="${escCat(dims)}" placeholder="например 2500x1000x750 мм"></label>
      </div>
      <div class="fd-catalog-calc"><span>Цена позиции</span><strong id="fdCatalogFinalPrice">—</strong></div>
      <button type="button" class="fd-primary fd-catalog-add">${item?'Сохранить изменения':'Добавить в КП'}</button>`;
    document.getElementById('fdCatalogModal').hidden=false;
    updateCatalogFinalPrice();
  }

  function closeCatalogModal(){document.getElementById('fdCatalogModal').hidden=true; currentCatalogProduct=null; editingCatalogUid=null;}
  function handleCatalogConfigChange(e){
    if(e.target.id==='fdCatalogVariant'){
      const v=selectedCatalogVariant();
      if(v){document.getElementById('fdCatalogBasePrice').value=Number(v.price||0); document.getElementById('fdCatalogDims').value=inferDims(currentCatalogProduct,v);}
    }
    updateCatalogFinalPrice();
  }
  function updateCatalogFinalPrice(){
    const base=Number(document.getElementById('fdCatalogBasePrice')?.value||0);
    const modsTotal=selectedModifierData().reduce((sum,x)=>sum+Number(x.option?.priceDelta||0),0);
    const markup=Number(document.getElementById('fdCatalogMarkup')?.value||0);
    const final=Math.round((base+modsTotal)*(1+markup/100));
    const out=document.getElementById('fdCatalogFinalPrice'); if(out)out.textContent=moneyFmt(final);
  }

  async function imageToDataUrl(url){
    if(!url)return'';
    try{
      const r=await fetch(url,{mode:'cors'}); if(!r.ok)throw new Error(String(r.status));
      const blob=await r.blob(); return await new Promise((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.onerror=reject;fr.readAsDataURL(blob);});
    }catch(e){console.warn('Не удалось встроить фото каталога в PDF, оставляем URL',e);return url;}
  }

  async function addCatalogItem(){
    const v=selectedCatalogVariant();
    const base=Number(document.getElementById('fdCatalogBasePrice')?.value||0);
    const modifierData=selectedModifierData();
    const catalogModSelections=currentModifierSelections();
    const modsTotal=modifierData.reduce((sum,x)=>sum+Number(x.option?.priceDelta||0),0);
    const markup=Number(document.getElementById('fdCatalogMarkup')?.value||0);
    const price=Math.round((base+modsTotal)*(1+markup/100));
    const dims=(document.getElementById('fdCatalogDims')?.value||'').trim();
    const imageUrl=currentCatalogProduct.photo||'';
    const imageData=await imageToDataUrl(imageUrl);
    const rows=[];
    if(v?.editions) v.editions.split(';').filter(Boolean).forEach(part=>{const [k,...rest]=part.split(':');rows.push({label:k||'Конфигурация',value:rest.join(':')||part});});
    modifierData.forEach(({group,option})=>{
      if(option?.label) rows.push({label:group.label,value:option.label});
    });
    if(markup>0) rows.push({label:'Индивидуальный размер',value:`Да (+${markup}%)`});
    if(currentCatalogProduct.material) rows.push({label:'Материал',value:currentCatalogProduct.material});
    if(currentCatalogProduct.collection) rows.push({label:'Коллекция',value:currentCatalogProduct.collection});
    const item={
      uid:editingCatalogUid||`catalog_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
      sourceType:'site_catalog', productId:`site_${currentCatalogProduct.id}`, productName:currentCatalogProduct.title,
      catalogProductId:currentCatalogProduct.id,catalogVariantId:v?.id||'',catalogVariantLabel:v?variantLabel(v):'',
      catalogBasePrice:base,catalogModSelections,catalogModifiersTotal:modsTotal,catalogMarkupPercent:markup,price,quantity:1,dimensionsText:dims,catalogRows:rows,
      image:{dataUrl:imageData,sourceUrl:imageUrl,name:currentCatalogProduct.title}
    };
    if(editingCatalogUid){const i=state.items.findIndex(x=>x.uid===editingCatalogUid);if(i>=0){item.quantity=state.items[i].quantity||1;state.items[i]=item;}}
    else state.items.push(item);
    renderCart(); update(); updateManagerTotal(); closeCatalogModal(); setActiveStep(4);
  }

  const originalLoadItemForEdit=loadItemForEdit;
  loadItemForEdit=function(uid){
    const item=state.items.find(x=>x.uid===uid); if(item?.sourceType==='site_catalog'){setCatalogMode('site');openCatalogConfigurator(item.catalogProductId,item);return;}
    originalLoadItemForEdit(uid);
  };

  const originalBuildPdfVm=buildPdfVm;
  buildPdfVm=function(kp){
    const vm=originalBuildPdfVm(kp);
    (kp.items||[]).forEach((src,i)=>{
      if(src.sourceType!=='site_catalog'||!vm.items[i])return;
      vm.items[i].productName=src.productName;
      vm.items[i].dimensionsText=src.dimensionsText||'';
      vm.items[i].rows=src.catalogRows||[];
      vm.items[i].image=src.image?.dataUrl||src.image?.sourceUrl||'';
      vm.items[i].price=Number(src.price||0);
      vm.items[i].quantity=Number(src.quantity||1);
      vm.items[i].total=vm.items[i].price*vm.items[i].quantity;
      vm.items[i].totalVat=vm.items[i].total*1.22;
    });
    vm.totalSum=vm.items.reduce((s,x)=>s+Number(x.total||0),0);
    vm.totalVat=vm.totalSum*1.22;
    vm.totalWithDiscount=vm.totalSum*(1-Number(vm.header.discountPercent||0)/100);
    vm.totalWithDiscountVat=vm.totalWithDiscount*1.22;
    return vm;
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(initCatalog,0)); else setTimeout(initCatalog,0);
})();
