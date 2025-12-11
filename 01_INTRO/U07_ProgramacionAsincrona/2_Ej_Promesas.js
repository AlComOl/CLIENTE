// La promesa representa un resultado que llega en el futuro.
// Si todo sale bien → .then()
// Si hay error → .catch()
// En tu ejemplo, el “error” o “éxito” se decide con un Math.random().


(() => {
  const promise = new Promise((resolve, reject) => { // Función ejecutora
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Resolving an asynchronous request!");
      } else {
        reject("Rejecting an asynchronous request!");
      }
    }, 2000);
  });

  promise.then((response) => { //.then si se resuelve con resolve()
    console.log(response);
  }).catch((response) => { // .catch si falla con reject()
    console.log(response);
  });
})();

// Segundo ejemplo de promesas

(() => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        resolve(data);
      }, 3000);
    });
  }

  fetchData().then((data) => {
    console.log(data);
  });

  console.log("Data is being fetched...");
})();