//github.io/styleguide/jsguide
// console.log("hola")
//repasar bucles
//numero primo


//bucles while
//Mientras la condiccion sea verdara el cosigo del cuerpo del bucle será ejecutado.
// let i=0;
// while(n<=3){
//     console.log("hola");
//     n++;
// }

// while(n){
//     n--;
//     console.log(n);
// }
// for (let i = 0; i < 3; i++) {
//   console.log(`número ${i}!`);
// }

// while(true){

//     let n=prompt("Introduce un numero menor de 100");

    

//     if(n<100||n==null) break;

// }

// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//   console.log(i);
// }

// for (let i = 0; i < count; i++) {
//   console.log(i);
// }

//let - ambito del scope {} , puede reasignarse, No puede redeclararse.

// var dentro de una funcion scope{} si se declara fuera global, Si rasignar y Si redeclarar

//const No puede redeclararse , No puede redeclararse ni reasignarse.
// function test() {// ReferenceError

      
//   console.log(x); 
//   var x = 10;
//   var x=20;

  
// }


// test();


const urba={

  consegue: 'Alejandro',
  presidente: 'Andres',
  vecino: 'Sergio',
  vecinos:['Orduño','Pepe','Luis']

};

// console.log(urba);

// for (const key in urba) {
//       console.log(key);
// }

 let urba2={};
 urba2={...urba};


urba2.consegue='Alvaro';
 console.log(urba.consegue);
 
 console.log(urba2.consegue);







