let formulario = document.getElementById('mi-tarea');
let lista = document.getElementById('tareas-guardadas');
let indiceEditar = null;

// Función para mostrar todas las tareas
function mostrarTareas() {
    lista.innerHTML = '';
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');

        // Marcar como completada con click en el texto
        li.textContent = `${tarea.fecha} - ${tarea.texto}`;
        if (tarea.completada) {
            li.classList.add('completada');
        }
        li.onclick = function() {
            tarea.completada = !tarea.completada;
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mostrarTareas();
        };

        // Botón para editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick=function(e) {
            e.stopPropagation(); // evitar marcar como completada al editar
            document.getElementById('fecha').value=tarea.fecha;
            document.getElementById('tarea').value=tarea.texto;
            indiceEditar = index;
        };

        //  borrar
        let btnBorrar = document.createElement('button');
        btnBorrar.textContent='Borrar';
        btnBorrar.onclick=function(e) {
            e.stopPropagation(); // evitar marcar completada al borrar
            tareas.splice(index, 1);
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mostrarTareas();
        };

        li.appendChild(btnEditar);
        li.appendChild(btnBorrar);
        lista.appendChild(li);
    });
}

// Mostrar tareas al cargar la página
mostrarTareas();

// Manejar submit del formulario
formulario.onsubmit = function(event) {
    event.preventDefault();

    let fecha=document.getElementById('fecha').value;
    let texto=document.getElementById('tarea').value;

    if (!fecha || !texto) {
        alert('Debes completar la fecha y el texto de la tarea.');
        return;
    }

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    if (indiceEditar !== null) {
        // Editar existente
        tareas[indiceEditar].fecha = fecha;
        tareas[indiceEditar].texto = texto;
        indiceEditar = null;
    } else {
        // Crear tarea
        let nuevaTarea = { fecha: fecha, texto: texto, completada: false };
        tareas.push(nuevaTarea);
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
    formulario.reset();
}