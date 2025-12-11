// FUENTE https://cipfpbatoi.github.io/materials/daw/dwc/01-js/09-ajax.html#ejemplos-de-env%C3%ADo-de-datos
"use strict";
const SERVER = 'https://jsonplaceholder.typicode.com';
// entrar en  https://jsonplaceholder.typicode.com/posts para ver todos los posts que podemos 
const tbody = document.querySelector('tbody');

window.addEventListener('load', () => {
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();
    let idUser = document.getElementById('id-usuario').value;

    if (isNaN(idUser) || idUser == '') {
      alert('Debes introducir un número');
    } else {
      const datos = getPosts(idUser); // datos será  undefined
      console.log("los posts recibidos: ", datos)


      const numPosts = document.getElementById('num-posts'); // Span donde ponemos el total

      // borra y luego rellena la tabla
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

      numPosts.textContent = datos.length;
      console.log("pintarTabla(): tabla actualizada con", datos.length, "posts");
    }
  });
});

function pintarTabla(datos) {

}


function getPosts(idUser) {
  console.log("in getPosts: haciendo la peticion: " + "GET: " + SERVER + '/posts?userId=' + idUser);
  const peticion = new XMLHttpRequest();
  peticion.open('GET', SERVER + '/posts?userId=' + idUser);
  peticion.send();

  peticion.addEventListener('load', function () {
    if (peticion.status === 200) {
      const datos = JSON.parse(peticion.responseText);
      console.log("in getPosts: datos: ", datos)
      return datos; // No devuelve nada al exterior
    } else {
      console.error("Error " + peticion.status);
    }
  });

  peticion.addEventListener('error', () =>
    console.error('Error en la petición HTTP')
  );

  console.log("Saliendo de getPosts...");
}
