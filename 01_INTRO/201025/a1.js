//https://www.30secondsofcode.org/js/s/this/


//2️⃣ Encadenamiento opcional (?.)

//Se usa para acceder a propiedades de un objeto de forma segura, evitando errores si la propiedad intermedia no existe.

//Ejemplo:

let persona = { nombre: "Ana", calle : " san roc" };

console.log(persona.direccion?.calle); // undefined, en vez de error



//EJERCICIO: Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”),
 //categoria (“Televisores”), unidades (4), precio (345.95) y
 //con un método llamado importe que devuelve el valor total de las unidades (nº de unidades * precio)

 tvSansung={

    nombre:"TV Sansung 42",
    categoria:"Televisores",
    unidades: 4,
    precio: 345.95,

 }


    let valor=tvSansung.unidades*tvSansung.precio;


function importe(){
    let valor=tvSansung.unidades*tvSansung.precio;

    return valor;
}

function importe1(){
    let valor=this.unidades*this.precio;

    return valor;
}

let importe2 =(()=>{
    let valor=tvSansung.unidades*tvSansung.precio;
});






 console.log(importe());

 console.log(importe1());

 tvSansung.importe2();

//copiar objetos anidadrso 
 const a1 = {id: 2, name: 'object 2', address: {street: 'Rue del Percebe', num: 13} }
const copiaDeA =  JSON.parse(JSON.stringify(a1))       // ahora ambos objetos contienen lo mismo pero son diferentes


//o bien usar la función structuredClone:

const a = {id: 2, name: 'object 2', address: {street: 'Rue del Percebe', num: 13} }
const b =  structuredClone(a)       // ahora ambos objetos contienen lo mismo pero

 //https://marcosruiz.github.io/posts/clases-javascript/

 //lo ultimo el metodo to string