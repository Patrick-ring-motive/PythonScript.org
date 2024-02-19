globalThis.debug = false;

if(debug&&window&&(window==window.top)){
  if(!globalThis['console.log']){ globalThis['console.log'] = console.log; }
  if(!globalThis['console.debug']){ globalThis['console.debug'] = console.debug; }
  if(!globalThis['console.error']){ globalThis['console.error'] = console.error; }
  console.log =(a,e)=> alert(a+' '+e+' '+e?.message);
  console.debug =(a,e)=> alert(a+' '+e+' '+e?.message);
  console.error =(a,e)=> alert(a+' '+e+' '+e?.message);
}

if(window){
  Object.defineProperty(window, 'nodeName', {
  value: 'window',
  writable: false
});
}
