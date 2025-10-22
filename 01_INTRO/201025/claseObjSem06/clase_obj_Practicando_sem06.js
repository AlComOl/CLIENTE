//  "use strict";

let trabajador = {
    nombre: "Álvaro",
    edad:50,
    profesion:"programador",
    residencia:"española",
   lenguajes:{backend:"php", frontEnd:"JavaScript"}


 }
// //iteramos sobre el objeto con el forIn
// //prop representa el nombre de cada propiedad
// //trabajador[prop] accede al valor de esa propiedad
// // for(let prop in trabajador){
   
// //     console.log(trabajador[prop]);
// // }

// // /* EJERCICIO: Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”),
// //  categoria (“Televisores”), unidades (4), precio (345.95) y con un método llamado importe 
// //  que devuelve el valor total de las unidades (nº de unidades * precio)   */

// let tvSamsung ={
//     nombre:"TV Samsung 42",
//     categoria:"Telvisores",
//     unidades:4,
//     precio:345.95,

// }

// tvSamsung.color="negro";


// //podemos aceder a las prop de las 2 formas
//   console.log(tvSamsung.precio);
  
//   console.log(tvSamsung['precio']);

// //si intentamos acceder a propirdades que no existen devuelve undefined
//  console.log(tvSamsung.descripcion);
//  //si intentamos acceder a algo que no es un objeto se genera un error
//  //**¿Por que no me da el error y sigue dandome undefined? GPT me dice que el entorno esta suavizado 
//   console.log(tvSamsung.nombre.apodo);
// //como la segunda propiedad da undefined porque truty y undefined= false con lo cual da undefined
//   console.log(tvSamsung.categoria&&tvSamsung.categoria.alta);

//   //es una opcion para que no de error y devuelva undefined  optional chaining
//   console.log(tvSamsung);
//     console.log(tvSamsung?.casa);
// //con el for in recorremos las propiedades

// for(let prop in tvSamsung){
//     console.log(tvSamsung[prop]);
// }
// //Una propiedad de un objeto puede ser una función:
// trabajador.getInfo=function(){
//     return "El trabajador "+ this.nombre+" tiene "+this.edad+" su trabajo es "+this.profesion;
// }
// console.log(trabajador.getInfo());

//Si hicieramos una arrow funcion daria undefined
// trabajador.getInfo=()=>{
//     return "El trabajador "+ this.nombre+"tiene"+this.edad+"su trabajo es "+this.profesion;
// }
// console.log(trabajador.getInfo());

// for(prop in trabajador){
//     console.log(trabajador[prop]);
// }



//Propagación de propiedades

//El operador de propagación, ... (3 puntos), permite extraer las propiedades de un objeto. Ejemplo:

let AudiQ={

    nombre:"Audi",
    color:"sin color",
    chasis:"4x4",
    altura:500,
}

let Q5 ={//mucho cuidado con el use stric aqui si esta activado no deja hacerlo
    ...AudiQ,
    ruedas:"50 pulgadas",
    asientos:"especiales Q5",
    volate:"depotivo"
}

// for(prop in Q5){
//     console.log(Q5[prop]);
// }

//Desestructuración de objetos
// Aunque a la función se le pasa un objeto esta toma como parámetros sólo 
// 2 de sus propiedades y las asigna a las variables nombre y apellidos.
// function muestraAsientos({nombre,asientos}){
//     console.log("El nombre es "+nombre+" y lleva "+asientos);

// }

//tambien se pueden asignar valores por defecto

// function porDefecto(nombre,cristales="Nuevo modelo"){
//   return `nombre es: ${nombre},cristales: ${cristales}`;
// }

// // console.log(muestraAsientos(Q5));
// console.log(porDefecto(Q5));

Alvaro={
    nombre: "Álvaro Junior",
    edad: 4,
    profesion:"no tiene todavia"
}



personaAlvaro ={
 nombre:"Álvaro",
 edad:50,
 profesion:"gestion de tierras de cultivo"
}

alumnoAlvaro={
 ciclo:"DAW",
 curso:"2º"
}




for(prop in personaAlvaro){
    console.log(personaAlvaro[prop]);
}
// console.log(Object.entries(personaAlvaro));


////////////////////////////CLASE //////////////////////////////
let refAlvaro={...Alvaro}; //creamos un objeto diferente( no tienen nada que ver uno con otro)
 refAlvaro.edad=5;
//  Alvaro.edad=56;

let copiaAlvaro=Alvaro;// aqui copiaAlvaro apunta a Alvaro con lo cual si cambia Alvaro , CopiaAlbaro tambien
// Alvaro.edad=5;

console.log("edad Alvaro "+Alvaro.edad);
console.log("edad refAlvaro "+refAlvaro.edad);
console.log("copiaAlvaro "+copiaAlvaro.edad);

console.log("Persona Álvaro ===Alumno alvaro  :"+ refAlvaro===Alvaro);
console.log("copiaAlvaro === Alvaro "+copiaAlvaro===Alvaro);


let carlos={
    profesion:"Agricultor",
    edad:34
};



// Aquí no se crea un nuevo objeto, solo se crea otra referencia al mismo objeto.

// carlos y clonCarlos apuntan al mismo lugar en memoria.

let clonCarlos=carlos;

console.log("edad: "+carlos.edad +"carlos.edad y clonCarlos.edad son iguales, porque es el mismo objeto. "+"edad :" +clonCarlos.edad);
 carlos.edad=70;
console.log("Como clonCarlos apunta al mismo objeto, su edad también cambia.");
console.log("edad: "+carlos.edad +" cambiando edad "+"edad :" +clonCarlos.edad);
console.log("Si le cambio la edad al clon tambien cambiara carlos");
clonCarlos.edad=80;
console.log("edad: "+carlos.edad +" Cambio edad al clon "+"edad :" +clonCarlos.edad);

console.log("En java escript si comparamos los objetos nos dara true");

const ana={
    edad:3
}
let jose= {
    age:25,
    sobrina:{...ana}

}

let restJose={...jose} //son objetos diferentes

//restJose.age=30;

let copiaJose=jose;//apuntan al misma posicion de memoria

console.log(restJose.sobrina===jose.sobrina);
console.log(restJose.age);
console.log(copiaJose.sobrina===jose.sobrina);
console.log(copiaJose===jose);
console.log(jose===restJose);
restJose.age=40;
console.log(restJose.age);
console.log(jose.age);

//restJose.sobrina.edad= "500"
copiaJose.sobrina=5;

//console.log(restJose===jose);
console.log("ana.edad ", ana.edad);
console.log("sobrina de copiajose ", copiaJose.sobrina);
console.log("sobrina de jose", jose.sobrina);
console.log(ana);

//console.log(copiaJose===jose);



