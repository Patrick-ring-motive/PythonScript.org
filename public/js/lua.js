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





      declare(() => {
          queryApplyAll('[href^="https://www.www"]', (el) => {
              el.updateAttribute('href', el.href.replaceAll('www.www', 'www'));
          });
          queryApplyAll('[src^="https://www.www"]', (el) => {
              el.updateAttribute('src', el.src.replaceAll('www.www', 'www'));
          });
      });

      globalThis.hostList = ['cplusplus.com'];
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
