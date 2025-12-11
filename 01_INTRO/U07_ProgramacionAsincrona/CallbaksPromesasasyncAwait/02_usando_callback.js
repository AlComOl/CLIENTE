// MODIFICADO DE https://cipfpbatoi.github.io/materials/daw/dwc/01-js/09-ajax.html#algo-mejor-funciones-callback
"use strict";
const SERVER = 'https://jsonplaceholder.typicode.com'
const tbody = document.querySelector('tbody')

window.addEventListener('load', () => {

  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('submit formulario')

    let idUser = document.getElementById('id-usuario').value

    if (isNaN(idUser) || idUser.trim() == '') {
      alert('Debes introducir un número')
    } else {
      console.log('Solicitando posts del usuario:', idUser)
      // Aquí usamos callback para que la función que pinta la tabla
      // se ejecute SOLO cuando lleguen los datos
      getPosts(idUser, renderPosts, mostrarError)
    }
  })
})


function mostrarError(msg) {
  console.error('ERROR:', msg)
  alert('Ha ocurrido un error: ' + msg)
}

/**
 * renderPosts recibe el array de posts y pinta la tabla
 */
function renderPosts(datos) {

  console.log('Datos recibidos en renderPosts:', datos)

  tbody.innerHTML = ''
  datos.forEach(post => {
    const newPost = document.createElement('tr')
    newPost.innerHTML = `
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>`
    tbody.appendChild(newPost)
  })

  // Mostrar número de posts
  document.getElementById('num-posts').textContent = datos.length;
  console.log('Tabla actualizada con', datos.length, 'posts')
}

/**
 * getPosts hace la petición AJAX y ejecuta callbackOK o callbackERR
 * en función de si hay o no error
 */
function getPosts(idUser, callbackOK, callbackERR) {
  /*
   Utilizando la función callback hemos conseguido que getPosts() se encargue 
   sólo de obtener los datos y cuando los tenga los pasa al callback para que 
   haga lo que tenga que hacer en caso de éxito, y si no, un mensaje de error 
   a la función de error
  */
  console.log(' Preparando petición AJAX…')

  const peticion = new XMLHttpRequest()
  peticion.open('GET', SERVER + '/posts?userId=' + idUser)
  peticion.send()

  peticion.addEventListener('load', function() {
    console.log(' Petición completada con estado:', peticion.status)

    if (peticion.status === 200) {

      const datos = JSON.parse(peticion.responseText)
      console.log('Llamando callbackOK con los datos parseados')
      callbackOK(datos)

    } else {
      callbackERR("Error " + peticion.status + " (" + peticion.statusText + ")")
    }
  })

  peticion.addEventListener('error', () => {
    callbackERR('Error en la petición HTTP')
  })
}

