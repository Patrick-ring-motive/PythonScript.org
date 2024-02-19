globalThis.debug = true;

if(debug){
  globalThis['console.log'] = console.log;
  console.log = alert;
}

if(window){
  Object.defineProperty(window, 'nodeName', {
  value: 'window',
  writable: false
});
}
