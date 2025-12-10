// modificado de https://stackoverflow.com/questions/41488363/return-a-promise-from-an-executor-function
// Posted by nem035, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-09, License - CC BY-SA 4.0

function success() {
  return Promise.resolve('esto es un success!');
}

function error() {
  return Promise.reject('esto es un error!');
}

function alwaysPending() {
  return new Promise(() => {
    // COMO USO return success, y no uso un "resolve", pues la promesa nunca será "thenable" porque 
    // siempre está pending, me da igual que success cree una nueva promesa fulfilled, porque la 
    // que está por encima seguirá pending para siempre
    return success();
  });
}

function resolves() {
  return new Promise((resolve) => {
    resolve(success());
  });
}

function rejects() {
  return new Promise((resolve) => {
    resolve(error());
  });
}

// NUEVO EJEMPLO: error dentro de un then
function thenThrows() {
  return Promise.resolve('inicio')
    .then(val => {
      console.log('thenThrows: valor inicial', val);
      throw new Error('¡Error dentro del then!');
    });
}

// then recibe un callback, en este caso, le damos "console.log", que recibirá como parámetro de entrada
// el objeto que yo mande en el resolve/reject
alwaysPending().then(console.log); // nunca loguea nada!
resolves().then(console.log);       // loguea "esto es un success!"
rejects().catch(console.log);       // loguea "esto es un error!"

// uso del nuevo ejemplo
thenThrows()
  .then(val => console.log('Esto no se ejecuta'))
  .catch(err => console.log('thenThrows catch:', err.message));