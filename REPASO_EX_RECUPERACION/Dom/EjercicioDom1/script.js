let puntos=0;
document.querySelectorAll('.btn-incidencia').forEach(boton=>{
    boton.addEventListener('click',()=>{
        const tipo=boton.dataset.tipo;
        const prioridad= boton.dataset.prioridad;

        nuevaincidencia(tipo,prioridad)
    });
    
})






function nuevaincidencia(tipo,prioridad){

    const div=document.createElement('div');
    const botonSolucionar=document.createElement('button');
    const botonIgnorar=document.createElement('button');
    botonSolucionar.classList.add('btn-ok');
    botonSolucionar.innerText='Solucionar';
    botonIgnorar.classList.add('btn-cancel');
    botonIgnorar.innerText='Ignorar';

    div.classList.add('incidencia-card');
    div.innerText='Nombre:' +tipo +' Prioridad:' +prioridad;
    div.append(botonSolucionar);
    div.append(botonIgnorar);
    
    const addIncidencia=document.getElementById('lista-pendientes');

 
    addIncidencia.append(div);

    
    anadirPrioridad(div);
    

    botonSolucionar.addEventListener('click',()=>{
       const incidencia = botonSolucionar.parentElement;
        const InSol = document.getElementById('lista-resueltas');
        botonIgnorar.remove();
        botonSolucionar.remove();
        InSol.append(incidencia);
        
        actualizarPuntaje();
       
    })

    botonIgnorar.addEventListener('click',()=>{
        const elim=botonIgnorar.parentElement;
        console.log(elim);
        elim.remove();
    })

}

function anadirPrioridad(div){
    setTimeout(()=>{div.classList.add('estado-critico')},15000)
}


function actualizarPuntaje(){
    let resuelta=100;
    puntos+=resuelta;
    const actualizar=document.getElementById('puntos');
    actualizar.innerText=puntos;

}

