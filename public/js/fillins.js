globalThis.debug = true;

if(debug){
  if(!globalThis['console.log']){ globalThis['console.log'] = console.log; }
  if(!globalThis['console.debug']){ globalThis['console.debug'] = console.debug; }
  if(!globalThis['console.error']){ globalThis['console.error'] = console.error; }
  console.log =(a)=> alert(a);
  console.debug =(a)=> alert(a);
  console.error =(a)=> alert(a);
}

if(window){
  Object.defineProperty(window, 'nodeName', {
  value: 'window',
  writable: false
});
}
