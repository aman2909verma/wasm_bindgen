const wasm = import('./bindgenDemo');
wasm
.then(h => h.hello("world!"))
.catch(console.error);
