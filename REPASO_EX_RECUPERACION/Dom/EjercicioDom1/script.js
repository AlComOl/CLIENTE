
document.querySelectorAll('.btn-incidencia').forEach(boton=>{
    boton.addEventListener('click',()=>{
        const tipo=boton.dataset.tipo;
        const prioridad= boton.dataset.prioridad;

        nuevaincidencia(tipo,prioridad)
    });
    
})

 const btnOk=document.getElementsByClassName('btn-ok');

 

















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

    console.log(addIncidencia);
    addIncidencia.append(div);

    setTimeout(anadirPrioridad,3000);

    botonSolucionar.addEventListener('click',(e)=>{
       const incidencia = botonSolucionar.parentElement;
        const InSol = document.getElementById('lista-resueltas');
        botonIgnorar.remove();
        botonSolucionar.remove();
        InSol.append(incidencia);
       
    })



}

function anadirPrioridad(){
  const element=document.getElementsByClassName('incidencia-card')[0];
    element.classList.add('estado-critico');
 
   

}

