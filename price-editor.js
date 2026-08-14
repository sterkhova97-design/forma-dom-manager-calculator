(function(){
  'use strict';

  const STORAGE_KEY='fd_price_overrides_v2';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const num=v=>{const n=Number(String(v??'').replace(/\s/g,'').replace(',','.'));return Number.isFinite(n)?n:0;};
  const fmt=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:2}).format(Number(n||0));
  let currentTab='custom';
  let descriptors=[];

  function loadOverrides(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')||{};}catch(_){return {};}
  }
  function saveOverrides(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data||{}));}

  function parseMods(raw){
    return String(raw||'').split('|').map((group,gi)=>{
      const parts=group.split(':');
      const groupLabel=(parts.shift()||'').trim();
      const optionRaw=parts.join(':');
      const options=optionRaw.split(';').map((item,oi)=>{
        const text=String(item||'').trim();
        if(!text)return null;
        const m=text.match(/^(.*?)(?:=\s*\+?(-?[\d\s.,]+))?$/);
        let label=(m?.[1]||text).trim();
        const delta=m?.[2]?num(m[2]):0;
        // Убираем старую цену из подписи, чтобы после редактирования не было двух разных сумм.
        label=label.replace(/\s*[+—-]?\s*\d[\d\s]*(?:руб\.?|₽|р\.?)\s*$/i,'').trim();
        return {gi,oi,label,delta};
      }).filter(Boolean);
      return {gi,label:groupLabel,options};
    }).filter(g=>g.label&&g.options.length);
  }
  function rebuildMods(groups){
    return groups.map(g=>`${g.label}:${g.options.map(o=>o.delta?`${o.label}=+${Math.round(o.delta)}`:o.label).join(';')}`).join('|');
  }

  function applyOverrides(){
    const ov=loadOverrides();
    try{
      (EMBEDDED_CATALOG||[]).forEach(product=>{
        (product.params||[]).forEach(param=>{
          const baseKey=`custom|${product.id}|${param.id}|base`;
          if(param.calcMode==='base_price' && ov[baseKey]!=null) param.settings.baseValue=String(ov[baseKey]);
          const unitKey=`custom|${product.id}|${param.id}|unit`;
          if(param.settings?.unitPrice!=null && ov[unitKey]!=null) param.settings.unitPrice=String(ov[unitKey]);
          const trueKey=`custom|${product.id}|${param.id}|true`;
          if(param.settings?.trueValue!=null && ov[trueKey]!=null){
            param.settings.trueValue=String(param.calcMode==='multiply'?num(ov[trueKey])/100:ov[trueKey]);
          }
          (param.options||[]).forEach(option=>{
            const key=`custom|${product.id}|${param.id}|option|${option.id}`;
            if(ov[key]==null)return;
            const mode=option.settings?.pricingMode || (param.calcMode==='multiply'?'percent_base':'fixed');
            option.value=mode==='percent_base'||param.calcMode==='multiply'?num(ov[key])/100:num(ov[key]);
          });
        });
      });
    }catch(e){console.warn('Не удалось применить цены индивидуального расчёта',e);}

    try{
      (SITE_CATALOG||[]).forEach(product=>{
        const baseKey=`site|${product.id}|base`;
        if(ov[baseKey]!=null) product.basePrice=num(ov[baseKey]);
        (product.variants||[]).forEach(v=>{
          const key=`site|${product.id}|variant|${v.id}`;
          if(ov[key]!=null)v.price=num(ov[key]);
        });
        const groups=parseMods(product.modifications);
        let changed=false;
        groups.forEach(g=>g.options.forEach(o=>{
          const key=`site|${product.id}|mod|${g.gi}|${o.oi}`;
          if(ov[key]!=null){o.delta=num(ov[key]);changed=true;}
        }));
        if(changed)product.modifications=rebuildMods(groups);
      });
    }catch(e){console.warn('Не удалось применить цены каталога',e);}
  }

  function customDescriptors(){
    const rows=[];
    (EMBEDDED_CATALOG||[]).forEach(product=>{
      (product.params||[]).forEach(param=>{
        if(param.calcMode==='base_price'){
          rows.push({key:`custom|${product.id}|${param.id}|base`,section:'Индивидуальный расчёт',product:product.name,label:'Стартовая цена',unit:'₽',value:num(param.settings?.baseValue),set:v=>param.settings.baseValue=String(num(v))});
        }
        if(param.settings?.unitPrice!=null){
          rows.push({key:`custom|${product.id}|${param.id}|unit`,section:'Индивидуальный расчёт',product:product.name,label:`${param.name} — цена за единицу`,unit:'₽',value:num(param.settings.unitPrice),set:v=>param.settings.unitPrice=String(num(v))});
        }
        if(param.settings?.trueValue!=null && ['add','multiply'].includes(param.calcMode)){
          const isPct=param.calcMode==='multiply';
          rows.push({key:`custom|${product.id}|${param.id}|true`,section:'Индивидуальный расчёт',product:product.name,label:`${param.name} — Да`,unit:isPct?'%':'₽',value:isPct?num(param.settings.trueValue)*100:num(param.settings.trueValue),set:v=>param.settings.trueValue=String(isPct?num(v)/100:num(v))});
        }
        (param.options||[]).forEach(option=>{
          const pricingMode=option.settings?.pricingMode || (param.calcMode==='multiply'?'percent_base':'fixed');
          const relevant=['add','multiply'].includes(param.calcMode)||option.settings?.pricingMode;
          if(!relevant)return;
          const isPct=pricingMode==='percent_base'||param.calcMode==='multiply';
          rows.push({key:`custom|${product.id}|${param.id}|option|${option.id}`,section:'Индивидуальный расчёт',product:product.name,label:`${param.name}: ${option.label}`,unit:isPct?'%':'₽',value:isPct?num(option.value)*100:num(option.value),set:v=>option.value=isPct?num(v)/100:num(v)});
        });
      });
    });
    return rows;
  }

  function siteDescriptors(){
    const rows=[];
    (SITE_CATALOG||[]).forEach(product=>{
      if(!(product.variants||[]).length){
        rows.push({key:`site|${product.id}|base`,section:'Каталог Forma Dom',product:product.title,label:'Базовая цена',unit:'₽',value:num(product.basePrice),set:v=>product.basePrice=num(v)});
      }
      (product.variants||[]).forEach(v=>rows.push({key:`site|${product.id}|variant|${v.id}`,section:'Каталог Forma Dom',product:product.title,label:v.editions||v.title||'Вариант',unit:'₽',value:num(v.price),set:x=>v.price=num(x)}));
      parseMods(product.modifications).forEach(g=>g.options.forEach(o=>{
        // Нулевые опции "Без" тоже показываем: при необходимости им можно назначить цену.
        rows.push({key:`site|${product.id}|mod|${g.gi}|${o.oi}`,section:'Каталог Forma Dom',product:product.title,label:`${g.label}: ${o.label}`,unit:'₽',value:num(o.delta),set:v=>{
          const groups=parseMods(product.modifications);const target=groups[g.gi]?.options?.[o.oi];if(target){target.delta=num(v);product.modifications=rebuildMods(groups);}
        }});
      }));
    });
    return rows;
  }

  function getDescriptors(){return currentTab==='site'?siteDescriptors():customDescriptors();}

  function inject(){
    const bar=document.querySelector('#fd-calculator-root .fd-manager-bar');
    if(!bar||document.getElementById('fdPriceEditor'))return;
    const btn=document.createElement('button');
    btn.type='button';btn.className='fd-secondary fd-open-price-editor';btn.textContent='Редактировать цены';
    bar.appendChild(btn);
    document.body.insertAdjacentHTML('beforeend',`<div id="fdPriceEditor" class="fd-price-editor" hidden>
      <div class="fd-price-editor-dialog">
        <div class="fd-price-editor-head"><div><h2>Редактирование цен</h2><p>Все цены индивидуального расчёта и каталога сайта.</p></div><button type="button" class="fd-price-editor-close" aria-label="Закрыть">×</button></div>
        <div class="fd-price-editor-tabs"><button type="button" data-price-tab="custom" class="active">Индивидуальный расчёт</button><button type="button" data-price-tab="site">Каталог Forma Dom</button></div>
        <div class="fd-price-editor-tools"><input id="fdPriceSearch" placeholder="Поиск изделия или параметра"><button type="button" class="fd-price-export">Скачать CSV для Excel</button><label class="fd-price-import-label">Загрузить CSV<input id="fdPriceImport" type="file" accept=".csv,text/csv" hidden></label></div>
        <div class="fd-price-editor-count"></div><div class="fd-price-editor-table-wrap"><table class="fd-price-editor-table"><thead><tr><th>Изделие</th><th>Параметр / конфигурация</th><th>Цена / надбавка</th></tr></thead><tbody></tbody></table></div>
        <div class="fd-price-editor-footer"><button type="button" class="fd-price-reset">Сбросить изменения</button><button type="button" class="fd-price-save">Сохранить цены</button></div>
        <div class="fd-price-editor-note">Изменения сохраняются в этом браузере. CSV можно открыть в Excel, изменить колонку «Значение» и загрузить обратно.</div>
      </div></div>`);
    const modal=document.getElementById('fdPriceEditor');
    btn.addEventListener('click',()=>{modal.hidden=false;renderEditor();});
    modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.fd-price-editor-close'))modal.hidden=true;});
    modal.querySelector('.fd-price-editor-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-price-tab]');if(!b)return;currentTab=b.dataset.priceTab;modal.querySelectorAll('[data-price-tab]').forEach(x=>x.classList.toggle('active',x===b));renderEditor();});
    modal.querySelector('#fdPriceSearch').addEventListener('input',renderEditor);
    modal.querySelector('.fd-price-save').addEventListener('click',saveEditor);
    modal.querySelector('.fd-price-reset').addEventListener('click',resetEditor);
    modal.querySelector('.fd-price-export').addEventListener('click',exportCsv);
    modal.querySelector('#fdPriceImport').addEventListener('change',importCsv);
  }

  function renderEditor(){
    const modal=document.getElementById('fdPriceEditor');if(!modal)return;
    descriptors=getDescriptors();
    const q=(modal.querySelector('#fdPriceSearch')?.value||'').trim().toLowerCase();
    const filtered=descriptors.filter(r=>!q||`${r.product} ${r.label}`.toLowerCase().includes(q));
    modal.querySelector('.fd-price-editor-count').textContent=`Показано ${filtered.length} из ${descriptors.length}`;
    modal.querySelector('tbody').innerHTML=filtered.map(r=>`<tr><td><strong>${esc(r.product)}</strong></td><td>${esc(r.label)}</td><td><div class="fd-price-value"><input type="number" step="${r.unit==='%'?'0.1':'1'}" value="${String(Number(r.value||0))}" data-price-key="${esc(r.key)}"><span>${esc(r.unit)}</span></div></td></tr>`).join('')||'<tr><td colspan="3">Ничего не найдено</td></tr>';
  }

  function saveEditor(){
    const modal=document.getElementById('fdPriceEditor');
    const all=[...customDescriptors(),...siteDescriptors()];
    const map=new Map(all.map(r=>[r.key,r]));
    const ov=loadOverrides();
    modal.querySelectorAll('[data-price-key]').forEach(input=>{
      const d=map.get(input.dataset.priceKey);if(!d)return;
      const v=num(input.value);d.set(v);ov[d.key]=v;
    });
    saveOverrides(ov);
    try{if(typeof update==='function')update();}catch(_){ }
    try{document.querySelector('#fdCatalogSearch')?.dispatchEvent(new Event('input',{bubbles:true}));}catch(_){ }
    modal.querySelector('.fd-price-editor-note').textContent='Цены сохранены. Новые расчёты уже используют обновлённые значения. Для общей базы на других устройствах экспортируйте CSV.';
    renderEditor();
  }

  function resetEditor(){
    if(!confirm('Сбросить все изменения цен и вернуть значения из исходного калькулятора/CSV сайта?'))return;
    localStorage.removeItem(STORAGE_KEY);
    alert('Изменения цен сброшены. Страница будет обновлена.');
    location.reload();
  }

  function csvEscape(v){const s=String(v??'');return /[;"\n\r]/.test(s)?`"${s.replace(/"/g,'""')}"`:s;}
  function exportCsv(){
    const rows=[...customDescriptors(),...siteDescriptors()];
    const lines=['Ключ;Раздел;Изделие;Параметр;Единица;Значение',...rows.map(r=>[r.key,r.section,r.product,r.label,r.unit,r.value].map(csvEscape).join(';'))];
    const blob=new Blob(['\ufeff'+lines.join('\r\n')],{type:'text/csv;charset=utf-8'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`forma-dom-prices-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
  }

  function parseCsvLine(line){
    const out=[];let cur='';let quote=false;
    for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(quote&&line[i+1]==='"'){cur+='"';i++;}else quote=!quote;}else if(c===';'&&!quote){out.push(cur);cur='';}else cur+=c;}out.push(cur);return out;
  }
  async function importCsv(e){
    const file=e.target.files?.[0];if(!file)return;
    const text=await file.text();const lines=text.replace(/^\ufeff/,'').split(/\r?\n/).filter(Boolean);if(lines.length<2)return;
    const all=[...customDescriptors(),...siteDescriptors()];const map=new Map(all.map(r=>[r.key,r]));const ov=loadOverrides();let count=0;
    for(const line of lines.slice(1)){const cols=parseCsvLine(line);const key=cols[0];const value=cols[5];const d=map.get(key);if(!d)continue;const v=num(value);d.set(v);ov[key]=v;count++;}
    saveOverrides(ov);e.target.value='';
    document.querySelector('#fdCatalogSearch')?.dispatchEvent(new Event('input',{bubbles:true}));
    try{if(typeof update==='function')update();}catch(_){ }
    document.querySelector('.fd-price-editor-note').textContent=`Импортировано ${count} значений из CSV.`;renderEditor();
  }

  applyOverrides();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(inject,0));else setTimeout(inject,0);
})();
