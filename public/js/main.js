 document.title='🗿jjabrahams567';
    if((!localStorage.getItem('reddit'))&&(window==window.top)){
    alert(`🗿\
u/jjabrahams567 \
You know for those who are skeptical `);
    localStorage.setItem('reddit','dfhf');
    }
    void async function(){

try{
      await import('https://www.unpkg.com/javaxscript@1.1.32/framework.js');
}catch(e){
 alert(e.message);
}
       declare(()=>{

      swapText('python','𝖯𝗒𝗍𝗁𝗈𝗇𝖲𝖼𝗋𝗂𝗉𝗍');

    });

    declare(()=>{
      const attrs = ['src','href'];
      const attrs_length = attrs.length;

      for(let x=0;x<attrs_length;x++){
        const attr = attrs[x];
        queryApplyAll(`[${attr}]:not([${attr}^="http"],[${attr}^="blob"],[${attr}^="chrome"],[${attr}^="data"])`,(el)=>{
         
            el.updateAttribute(attr,el[attr]);
          
        });
      }
    });


    globalThis.hostList = ['www.python.org','python.org'];
    declare(()=>{
      const hostList = globalThis.hostList;
      const hostList_length = hostList.length;

      const attrs = ['src','href'];
      const attrs_length = attrs.length;

      for(let i=0;i<hostList_length;i++){
        const host = hostList[i];
        for(let x=0;x<attrs_length;x++){
          const attr = attrs[x];
          queryApplyAll(`[${attr}*="https://${host}"]`,(el)=>{
            
         
              let c = '?';if(el[attr].includes('?')){c = '&';}
              el.updateAttribute(attr,el[attr].replaceAll(host,location.host)+c+'hostname='+host);
            

          });
        }
      }

    });

    declare(()=>{
      if(location.href.includes('hostname=')){
        const hostname = location.href.split('hostname=')[1].split('?')[0].split('&')[0].split('#')[0];
        const host = location.host;

        const attrs = ['src','href'];
        const attrs_length = attrs.length;

        for(let x=0;x<attrs_length;x++){
          const attr = attrs[x];
          queryApplyAll(`[${attr}^="https://${host}"]:not([${attr}*="hostname="]`,(el)=>{
            
         
              let c = '?';if(el[attr].includes('?')){c = '&';}
              el.updateAttribute(attr,el[attr]+c+'hostname='+hostname);
            

          });
        }

        queryApplyAll('[style*="url"]:not([style*="hostname="])',(el)=>{
        
        if(el.style.backgroundImage){
          let im = document.createElement('img');
          im.src = S(()=>el.getAttribute('style').split("url('")[1].split("')")[0]+`?hostname=${hostname}`);
          im.style.visibility='hidden';
          im.style.height='0px';
          document.body.appendChild(im);
        } 
        let st = el.getAttribute('style').replaceAll("')",`?hostname=${hostname}')`); 
        el.updateAttribute('style',st);
      

    });


      }
    });



  }();
