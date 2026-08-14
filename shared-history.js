(function(){
  const LOCAL_KEY='forma_dom_manager_kp_v1';
  const API=String(window.FD_SHARED_HISTORY_API_URL||'').trim();

  function localList(){try{return JSON.parse(localStorage.getItem(LOCAL_KEY)||'[]')||[]}catch(_){return[]}}
  function localSet(v){localStorage.setItem(LOCAL_KEY,JSON.stringify(v||[]))}
  function configured(){return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?|$)/.test(API)}

  function jsonp(params){
    return new Promise((resolve,reject)=>{
      if(!configured()) return reject(new Error('Общая история не подключена'));
      const cb='__fdJsonp_'+Date.now()+'_'+Math.random().toString(36).slice(2);
      const s=document.createElement('script');
      const timer=setTimeout(()=>finish(new Error('Сервер истории не ответил')),15000);
      function finish(err,data){
        clearTimeout(timer);
        try{delete window[cb]}catch(_){window[cb]=undefined}
        s.remove();
        err?reject(err):resolve(data);
      }
      window[cb]=data=>finish(null,data);
      const u=new URL(API);
      Object.entries({...params,callback:cb}).forEach(([k,v])=>u.searchParams.set(k,String(v??'')));
      s.onerror=()=>finish(new Error('Не удалось загрузить общую историю'));
      s.src=u.href;
      document.head.appendChild(s);
    });
  }

  async function waitForRecord(id,tries=8){
    for(let i=0;i<tries;i++){
      await new Promise(r=>setTimeout(r,450));
      try{const r=await jsonp({action:'history_get',id}); if(r?.ok&&r.snapshot)return r.snapshot}catch(_){/* retry */}
    }
    return null;
  }

  window.ManagerStorage={
    isShared:configured,
    apiUrl:API,
    async list(){
      if(!configured()) return localList().map(x=>({id:x.id,createdAt:x.createdAt,updatedAt:x.updatedAt,clientName:x.header?.clientName||'',manager:x.header?.manager||'',grand:x.totals?.grand||0,snapshot:x}));
      const r=await jsonp({action:'history_list'});
      if(!r?.ok) throw new Error(r?.error||'Не удалось получить историю КП');
      return Array.isArray(r.items)?r.items:[];
    },
    async get(id){
      if(!configured()) return localList().find(x=>x.id===id)||null;
      const r=await jsonp({action:'history_get',id});
      if(!r?.ok) throw new Error(r?.error||'КП не найдено');
      return r.snapshot||null;
    },
    async save(snapshot){
      if(!configured()){
        const all=localList();
        const old=all.find(x=>x.id===snapshot.id); if(old)snapshot.createdAt=old.createdAt;
        const i=all.findIndex(x=>x.id===snapshot.id); if(i>=0)all[i]=snapshot; else all.unshift(snapshot);
        localSet(all); return snapshot;
      }
      // no-cors позволяет GitHub Pages отправить запись в Apps Script без CORS-зависимости.
      await fetch(API,{method:'POST',mode:'no-cors',cache:'no-store',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({action:'history_save',snapshot})});
      return (await waitForRecord(snapshot.id))||snapshot;
    }
  };
})();
