  globalThis.sleep = (ms) => {
      return new Promise((resolve) => {
          setTimeout(resolve, ms);
      });
  };
  document.title = '🗿jjabrahams567';
  /*if ((!localStorage.getItem('reddit')) && (window == window.top)) {
      alert(`🗿
u/jjabrahams567 
You know for those who are skeptical `);
      localStorage.setItem('reddit', 'dfhf');
  }*/
  void async function() {
      try {
          await import(`https://www.unpkg.com/javaxscript@${globalThis.frameworkVersion}/framework.js`);
          if (!globalThis.declare) {
              await import('https://www.unpkg.com/javaxscript/framework.js');
          }
          if (!globalThis.declare) {
              eval?.(await (await fetch('/framework.js')).text());
          }
      } catch (e) {
          console.log(e.message);
      }
      while (!globalThis.declare) {
          await sleep(100);
      }
      
      DOMInteractive(async () => {
          await import('https://patrick-ring-motive.github.io/PythonScript.org/public/jsonp/rant.js');
        
        let injtext = RANT + 
            `<br><br>
            <h3>Here we have a simple 'Hello World' Example</h3><br><br>
  <iframe style="border-radius:1vmax;width:80vw;height:80vh;padding:0px;margin:0px" frameborder="0" src="https://gist.pythonscript.org/kg583/74dcf08574bb37f13be6fd978279bd6e"></iframe>
            `;
        
        let inject = select('.python-logo')?.parentElement;
            try{
             inject.outerHTML = injtext;
            }catch(e){
              let d = createElement('div');
              try{
              d.innerHTML = injtext;
              }catch(e){
                d.innerText = injtext;
              }
              body().prepend(d);
            }
      });

      declare(() => {
          try {
              swapText('python', '𝖯𝗒𝗍𝗁𝗈𝗇𝖲𝖼𝗋𝗂𝗉𝗍');
          } catch (e) {
              console.log(e.message);
          }
      });

      declare(() => {
          const attrs = ['src', 'href'];
          const attrs_length = attrs.length;
          for (let x = 0; x < attrs_length; x++) {
              const attr = attrs[x];
              queryApplyAll(`[${attr}]:not([${attr}^="http"],[${attr}^="blob"],[${attr}^="chrome"],[${attr}^="data"])`, (el) => {
                  try {
                      el.updateAttribute(attr, el[attr]);
                  } catch (e) {
                      console.log(e.message);
                  }

              });
          }
      });

      declare(() => {
          queryApplyAll('[href^="https://www.www"]', (el) => {
              el.updateAttribute('href', el.href.replaceAll('www.www', 'www'));
          });
          queryApplyAll('[src^="https://www.www"]', (el) => {
              el.updateAttribute('src', el.src.replaceAll('www.www', 'www'));
          });
      });

      globalThis.hostList = ['www.python.org'];
      declare(() => {
          const hostList = globalThis.hostList;
          const hostList_length = hostList.length;

          const attrs = ['src', 'href'];
          const attrs_length = attrs.length;

          for (let i = 0; i < hostList_length; i++) {
              const host = hostList[i];
              for (let x = 0; x < attrs_length; x++) {
                  const attr = attrs[x];
                  queryApplyAll(`[${attr}*="https://${host}"]`, (el) => {
                      try {
                          let c = '?';
                          if (el[attr].includes('?')) {
                              c = '&';
                          }
                          el.updateAttribute(attr, el[attr].replaceAll(host, location.host) + c + 'hostname=' + host);
                      } catch (e) {
                          console.log(e.message);
                      }
                  });
              }
          }
      });

      declare(() => {
          try {
              if (location.href.includes('hostname=')) {
                  const hostname = location.href.split('hostname=')[1].split('?')[0].split('&')[0].split('#')[0];
                  const host = location.host;
                
                  const attrs = ['src', 'href'];
                  const attrs_length = attrs.length;
                
                  for (let x = 0; x < attrs_length; x++) {
                      const attr = attrs[x];
                      queryApplyAll(`[${attr}^="https://${host}"]:not([${attr}*="hostname="]`, (el) => {
                          try {
                              let c = '?';
                              if (el[attr].includes('?')) {
                                  c = '&';
                              }
                              el.updateAttribute(attr, el[attr] + c + 'hostname=' + hostname);
                          } catch (e) {
                              console.log(e.message);
                          }
                      });
                  }

                  queryApplyAll('[style*="url"]:not([style*="hostname="])', (el) => {
                      if (el.style.backgroundImage) {
                          let im = document.createElement('img');
                          im.src = S(() => el.getAttribute('style').split("url('")[1].split("')")[0] + `?hostname=${hostname}`);
                          im.style.visibility = 'hidden';
                          im.style.height = '0px';
                          document.body.appendChild(im);
                      }
                      try {
                          let st = el.getAttribute('style').replaceAll("')", `?hostname=${hostname}')`);
                          el.updateAttribute('style', st);
                      } catch (e) {
                          console.log(e.message);
                      }
                  });
              }
          } catch (e) {
              console.log(e.message);
          }
      });
  }();
