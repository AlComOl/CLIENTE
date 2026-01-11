"use sctrict";


let dineroGastado = 0;

let cafe = {nombre: "Manzana", precio: 1.5};
let pan = {nombre: "Pan", precio: 2.10};
let queso = {nombre: "Queso", precio: 3.8};
let manzana = {nombre: "Manzana", precio: 4.5};



arrayCarrito=[];

document.querySelectorAll('.boton-producto').forEach((boton) => {
    boton.addEventListener('click',()=>{
        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;
        // console.log(nombre,precio);

        agregaAlCarrito(nombre,precio);
    });

});

function agregaAlCarrito(nombre,precio){

    const div = document.createElement('div');
    const li = document.createElement('li');

    const botonComprar = document.createElement('button');
    const botonEliminar = document.createElement('button');
    botonComprar.classList.add('btn-comprar');
    botonComprar.addEventListener('click',()=>{
        comprarProducto(li);
    });
    botonEliminar.classList.add('btn-Eliminar');
    botonEliminar.addEventListener('click',()=>{
        console.log('borrar');
    });

    li.classList.add('item');
    li.append(nombre,precio);

    div.appendChild(li);
    div.appendChild(botonComprar);
    div.appendChild(botonEliminar);

    const element=document.getElementById('carrito').appendChild(div);
    // console.log(element);
    setTimeout(iniciaTemporizador,5000,element)

}
// element= agregaAlCarrito;



function iniciaTemporizador(element){

    element.classList.add('urgente');

    console.log(element);



}

function comprarProducto(){

    console.log('voy a por esta funcion')

}