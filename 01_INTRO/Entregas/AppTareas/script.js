let formulario = document.getElementById('mi-tarea');
let lista = document.getElementById('tareas-guardadas');
let indiceEditar = null; // Índice de tarea que se está editando

// Función para mostrar todas las tareas
function mostrarTareas() {
    lista.innerHTML = '';
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.textContent = `${tarea.fecha} - ${tarea.texto}`;

        // Botón Borrar
        let btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar';
        btnBorrar.onclick = () => {
            tareas.splice(index, 1);
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mostrarTareas();
        };

        // Botón Editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {
            document.getElementById('fecha').value = tarea.fecha;
            document.getElementById('tarea').value = tarea.texto;
            indiceEditar = index; // Guardamos el índice a editar
        };

        li.appendChild(btnEditar);
        li.appendChild(btnBorrar);
        lista.appendChild(li);
    });
}

// Mostrar tareas al cargar la página
mostrarTareas();

// Capturar submit del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const texto = document.getElementById('tarea').value;

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    if (indiceEditar !== null) {
        // Editar tarea existente
        tareas[indiceEditar].fecha = fecha;
        tareas[indiceEditar].texto = texto;
        indiceEditar = null; // Reset
    } else {
        // Crear nueva tarea
        let nuevaTarea = { fecha: fecha, texto: texto, completada: false };
        tareas.push(nuevaTarea);
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
    formulario.reset();
});

