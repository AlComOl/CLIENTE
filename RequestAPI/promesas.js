// Una promesa tiene 3 estados:
// - pending (esperando)
// - fulfilled (resuelta bien → resolve)
// - rejected (fallida → reject)

// Crear una promesa
const miPromesa = new Promise(function(resolve, reject) {
  const exito = false;
  
  setTimeout(function() {
    if (exito) {
      resolve("¡Todo salió bien!"); // se pasa a .then()
    } else {
      reject("Algo salió mal");     // se pasa a .catch()
    }
  }, 1000);
});

// Usar la promesa
miPromesa
  .then(function(res) {
    console.log(res); // "¡Todo salió bien!"
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {
    console.log("Esto siempre se ejecuta, haya error o no");
  });