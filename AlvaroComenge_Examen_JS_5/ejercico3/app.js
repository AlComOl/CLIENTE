"use-sctrict";


/* Pistas a dar

- El método .appendChild() no sólo sirve para insertar un elemento HTML el DOM para renderizarlo, también sirve
  para reubicar un nodo existente y renderizado dentro de otra parte del árbol del DOM

- Los métodos de búsqueda/selección como .querySelectorX  y .getElementByX  se pueden aplicar tanto en la raíz 
  del árbol del DOM (document.) como en cualquier otro nodo elemento HTML del mismo.

- Las "nodeList" que devuelve un .querySelectorAll(), SI SOPORTAN el método forEach, mientras que 
  las "HTMLCollection" que devuelven los métodos .getElementsByX() NO SOPORTAN el método forEach
*/

const carrito = document.getElementById("carrito");
const comprados = document.getElementById("comprados");
const totalSpan = document.getElementById("total");

let dineroGastado = 0;

let cafe = {nombre: "Manzana", precio: 1.5};
let pan = {nombre: "Pan", precio: 2.10};
let queso = {nombre: "Queso", precio: 3.8};
let manzana = {nombre: "Manzana", precio: 4.5};

let listaProductos = [cafe, pan, queso, manzana];

let div_prod = document.getElementsByTagName("productos");

// Funcionalidad de los botones de los productos
document.querySelectorAll(".boton-producto").forEach((boton) => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        console.log(nombre,precio)
        agregaAlCarrito(nombre, precio);
    });
});


// recibo un nodo del DOM li  y guardo en su data-timeout el identificador del setTimeout 
function iniciaTemporizador(myLi){
    myLi.dataset.timeout = setTimeout(
        () => myLi.classList.add("urgente"), 3000 
    );   
}

// agrega los productos a la ul, recibe un string con el nombre y un float
function agregaAlCarrito(nombre, precio){
    let carritoUl= document.getElementById("carrito");
    
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = `${nombre} ${precio} €`;
    li.dataset.precio = precio;
    li.dataset.nombre = nombre;
    
    console.log("nombre: ", nombre, " || precio: ", precio);

    // botón compra
    let compra = document.createElement("button");
    li.appendChild(compra);

    compra.classList.add("btn-comprar");
    compra.textContent = "Comprar";
    compra.addEventListener("click", () => {
        comprarProducto(li);
    });

    // boton elimina
    let elimina = document.createElement("button");
    li.appendChild(elimina);
     

    elimina.classList.add("btn-eliminar");
    elimina.textContent = "Eliminar";
    elimina.addEventListener("click", () => {
        eliminarProducto(li);
    });
    
    iniciaTemporizador(li);

    carritoUl.appendChild(li);
}

function actualizaGastos(liProd){
    dineroGastado += Number(liProd.dataset.precio);
    document.getElementById("total").textContent = `${dineroGastado.toFixed(2)}`;

}

// Mueve un elemento a comprad, borra botones y actualiza gastos 
function comprarProducto(liProd){

    clearTimeout(liProd.dataset.timeout);
    let comprados = document.getElementById("comprados");
    comprados.appendChild(liProd);
    actualizaGastos(liProd);

    let botones = liProd.getElementsByTagName("button");
    botones[1].remove();
    botones[0].remove();    

    liProd.classList.remove("urgente")

}

function eliminarProducto(liProd){
    clearTimeout(liProd.dataset.timer);
    liProd.remove();
}

