// FUENTE: https://cipfpbatoi.github.io/materials/daw/dwc/01-js/09-ajax.html#ejemplos-de-env%C3%ADo-de-datos
"use strict";

const SERVER = 'https://jsonplaceholder.typicode.com';
const tbody = document.querySelector('tbody');

// Esperamos a que la ventana cargue para asignar eventos
window.addEventListener('load', function () {

  // Capturamos el submit del formulario
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();

    const idUser = document.getElementById('id-usuario').value;

    // Validación básica del input
    if (isNaN(idUser) || idUser.trim() === '') {
      alert('Debes introducir un número');
      return;
    }

    console.log("Llamamos a getPosts con idUser =", idUser);

    // Llamada a la función que devuelve una Promesa
    getPosts(idUser)
      .then(posts => {
        // Limpiar tabla antes de pintar
        tbody.innerHTML = '';

        // Pintar cada post
        posts.forEach(post => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>`;
          tbody.appendChild(row);
        });

        // Mostrar número de posts
        document.getElementById('num-posts').textContent = posts.length;
        console.log("Tabla actualizada con", posts.length, "posts");
      })
      .catch(error => {
        // Gestión centralizada de errores
        console.error("Error al obtener los posts:", error);
      });
  });
});

/**
 * getPosts(): devuelve una Promesa que representa la petición AJAX
 * resolve: función que marca la promesa como fulfilled
 * reject: función que marca la promesa como rejected
 */
function getPosts(idUser) {
  // HE USADO resuevle y rechaza para que diferenciéis estos callbacks de los métodos
  // estáticos de Promise.resolve() y Promise.reject() pero normalmente también se usa
  // resolve/reject  
  return new Promise((resuelve, rechaza) => {

    const peticion = new XMLHttpRequest();
    peticion.open('GET', `${SERVER}/posts?userId=${idUser}`);
    peticion.send();

    // Se ejecuta cuando la petición termina correctamente
    peticion.addEventListener('load', () => {
      if (peticion.status === 200) {
        const datosOK = JSON.parse(peticion.responseText);
        resuelve(datosOK); // Cambia el estado de la promesa a fulfilled, datosOK disponibles en el then 
        // .. .then( (data) => console.log(data) )
      } else {
        const datosERR = `Error ${peticion.status} (${peticion.statusText})`;
        rechaza(datosERR); // Cambia el estado de la promesa a rejected
      }
    });

    // Se ejecuta si hay un error de red
    peticion.addEventListener('error', () => {
      rechaza('Error en la petición HTTP');
    });

    // El executor devuelve undefined, pero eso no importa: la promesa
    // se resolverá o rechazará cuando llamemos a resolve() o reject()
  });
}
