// let formulario = document.getElementById('mi-tarea');//seleciona el formulario 

// formulario.addEventListener("submit", function(event) { //evita que se recargue la pagina
//   event.preventDefault();

//     const fecha = document.getElementById('fecha').value;
//     const texto =document.getElementById('tarea').value;



//   let nuevaTarea = { fecha: fecha, texto: texto };
//   let tareas=[];

//   tareas.push(nuevaTarea);

//   localStorage.setItem('tareas', JSON.stringify(tareas));

//   // Mostrar la tarea en HTML
//   let li = document.getElementById('tareas-guardadas')

//   tareas.forEach(element =>{ li.textContent=`${element.fecha} ${element.texto}`

//   })

 

//   formulario.reset(); // limpiar formulario


// });


// 1️⃣ Seleccionamos el formulario y el contenedor de tareas
let formulario = document.getElementById('mi-tarea');
let lista = document.getElementById('tareas-guardadas');

// 2️⃣ Función para mostrar todas las tareas en HTML
function mostrarTareas() {
    lista.innerHTML = ''; // limpiar lista antes de renderizar
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

   tareas.forEach((tarea, index) => {
    let li = document.createElement('li');
    li.textContent = `${tarea.fecha} - ${tarea.texto} `;

    // Botón de borrar
    let btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'Borrar';
    btnBorrar.setAttribute('data-index', index);

    btnBorrar.onclick = () => {
        // Eliminar usando el índice guardado
        tareas.splice(btnBorrar.getAttribute('data-index'), 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        mostrarTareas();
    };

    li.appendChild(btnBorrar);
    lista.appendChild(li);
});

}

// 3️⃣ Mostrar tareas al cargar la página
mostrarTareas();

// 4️⃣ Capturamos el submit del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const texto = document.getElementById('tarea').value;

    let nuevaTarea = { fecha: fecha, texto: texto };

    // Recuperar tareas existentes de localStorage
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    // Añadir la nueva tarea al array
    tareas.push(nuevaTarea);

    // Guardar el array completo en localStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));

    // Mostrar todas las tareas
    mostrarTareas();

    // Limpiar formulario
    formulario.reset();
});


