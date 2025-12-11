"use strict";
// FUENTE  https://cipfpbatoi.github.io/materials/daw/dwc/01-js/09-ajax.html#ejemplos-de-env%C3%ADo-de-datos
const SERVER = 'https://jsonplaceholder.typicode.com';
const tbody = document.querySelector('tbody');


window.addEventListener('load', () =>
  {
    document.getElementById('form-show').addEventListener('submit', (event) => {
      event.preventDefault();
      let idUser = document.getElementById('id-usuario').value;

      if (isNaN(idUser) || idUser == '') {
        alert('Debes introducir un número');
      } else {
        console.log("Llamamos a getPosts con idUser =", idUser);
        getPosts(idUser); // No devuelve nada, pero aquí sí funciona por cómo está hecho
        console.log("Después de llamar a getPosts() (pero el AJAX sigue en curso)");
      }
    })
  });

// función que gestiona la petición y también pinta la tabla -> 
function getPosts(idUser) {

  console.log("INI getPosts(): preparando petición GET a:", SERVER + "/posts?userId=" + idUser);

  const peticion = new XMLHttpRequest();
  peticion.open('GET', SERVER + '/posts?userId=' + idUser);
  peticion.send();

  // Esta función SÓLO se ejecuta cuando llegan los datos
  /*
  Este código sí que funcionaría pero tiene una pega: tenemos que tratar los datos (en este caso
   pintarlos en la tabla) en la función que gestiona la petición porque es la que sabe cuándo 
   están disponibles esos datos. Y sabemos que una función no debería tener 2 responsabilidades 
   diferentes (obtener los datos del servidor y renderizarlos en la página).
  */


  /* El evento load solo se dispara cuando el estado 4 (DONE) se ha alcanzado correctamente. Es decir:
   - La petición ha terminado
   - La conexión no ha dado error
   - La respuesta está lista para usar 
 */
  peticion.addEventListener('load', function () {

    console.log("eventListener 'load': respuesta recibida con código:", peticion.status);

    if (peticion.status === 200) {

      const datos = JSON.parse(peticion.responseText);
      console.log("getPosts(): datos parseados:", datos);

      // Limpiar y pintar tabla
      tbody.innerHTML = '';
      datos.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${post.userId}</td>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>`;
        tbody.appendChild(row);
      });

      document.getElementById('num-posts').textContent = datos.length;

    } else {
      console.error("Error " + peticion.status + " en la petición");
    }

    console.log("FIN eventlistener, dentro de getPosts()");

  });

  // Error de red
  peticion.addEventListener('error', () =>
    console.error('getPosts(): Error en la petición HTTP')
  );

  console.log("FIN getPosts():final de la función (pero el evento se gestionara con asincronía)");
}
