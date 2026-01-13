

const input=document.createElement('input');
const divTareas = document.getElementById('container');
const boton= document.createElement('button');
boton.id='id_crear';
boton.innerText="Crear Tarea";
input.id='id-tarea';
divTareas.append(input);
divTareas.append(boton);

boton.addEventListener('click',crearTarea);


let idtarea=1;

function crearTarea(){

  const liTarea=document.getElementById('id-tarea').value;
  const lista=document.getElementById('lista');
  const li= document.createElement('li');
  const div=document.createElement('div');
  const btnElminar=document.createElement('button');
  const btnModificar=document.createElement('button');
  btnElminar.id='btn-eliminar';
  btnElminar.innerText='Eliminar';

  btnModificar.id='btn-modificar';
  btnModificar.innerText='Modificar';
  div.id=idtarea;
  idtarea++;
  li.append(liTarea);
  li.appendChild(btnElminar);
  li.appendChild(btnModificar);



  
  div.append(li)
  lista.appendChild(div);
  

  btnElminar.addEventListener('click',()=>{
    div.remove()
  });

  btnModificar.addEventListener('click',()=>{


    //  const newLi=prompt('Introduce la modificación','');

     console.log(this);
     console.log(this.parentElement);
       

   


    
  })


}



function eliminarTarea(){

}