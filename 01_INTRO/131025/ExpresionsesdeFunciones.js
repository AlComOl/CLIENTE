// // function sayHi() {
// //   console.log( "Hello" );
// // }

// // sayHi();


// let sayHi = function() {
//   alert( "Hello" );
// };

// sayHi();

// //La función es un valor
// //Incluso podemos imprimir ese valor utilizando alert:
// let sayHi1 = function() {
//   alert( "Hello" );
// };

// alert(sayHi1);


// function sayHi() {   // (1) create
//   alert( "Hello" );
// }

// // Esto es lo que sucede arriba en detalle:

// //     La Declaración de la Función (1)Crea la función y la pone en la variable nombrada sayHi. .
// //     Línea (2)Lo copia en la variable func. . Tenga en cuenta de nuevo: no hay paréntesis después sayHi. . Si los hubiera, entonces func = sayHi()Escribiría el resultado de la llamada sayHi()En func, no la función sayHiEn sí mismo.
// //     Ahora la función puede ser llamada como ambas sayHi()Y y func(). .


// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)


//Una declaracion de funcion se puede llamar antes de la cracion de la misma 

// sayHi("John"); // Hello, John

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }
//Pero una expresion de funcion no funciona 
// sayHi("John"); // error!

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };




// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }
// //Esto se debe a que una declaración de función solo es visible dentro del bloque de código en el que reside.
// // ...use it later
// welcome(); // Error: welcome is not defined





//¿que podemos hacer para que sea visible? 

//El enfoque correcto sería usar una Expresión de Función y asignar welcomea la variable que se declara fuera de ifY tiene la visibilidad adecuada.

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings!");
//   };


// }

// welcome(); // ok now

//O podríamos simplificarlo aún más usando un operador de signo de interrogación ?:

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Hello!"); } :
//   function() { alert("Greetings!"); };

// welcome(); // ok now



//Parámetros de reposo y sintaxis de propagación
//puedes incluir los argumentos que quieras , solo entraran los 2 primeros.
// function sum(a, b) {
//   return a + b;
// }

// alert( sum(1, 2, 3, 4, 5) );


// Por ejemplo, para reunir todos los argumentos en array args:

// function sumAll(...args) { // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6



// function showName(firstName, lastName, ...titles) {
//   alert( firstName + ' ' + lastName ); // Julius Caesar

//   // the rest go into titles array
//   // i.e. titles = ["Consul", "Imperator"]
//   alert( titles[0] ); // Consul
//   alert( titles[1] ); // Imperator
//   alert( titles.length ); //13,9
// }
// //titles tiene que ir el ultimo sino da error
// //aqui mostrará las 2 argumentos y los numeros que le introduzcamos los metera el titles , mostrando el promero y la cantodad de numeros
// showName("Julius", "Caesar", "Consul", 13,11,14,1,1,1,1,1);


function propaga(a, ...b){

   return res= a+b;
}

alert(propaga(1,2,3));


//Por ejemplo, hay una función integrada Math.max que devuelve el mayor número de una lista:

alert( Math.max(3, 5, 1) ); // 5

//Ahora digamos que tenemos una matriz [3, 5, 1]. . ¿Cómo llamamos Math.max¿Con ella?

//Pasarlo “tal cual” no funcionará, porque Math.maxEspera una lista de argumentos numéricos, no una sola matriz:

let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN


// Resumen

// Cuando vemos "..."En el código, son los parámetros de descanso o la sintaxis de propagación.

// Hay una manera fácil de distinguir entre ellos:

//     ¿Cuándo ...Está al final de los parámetros de la función, es “parámetros de descanso” y reúne el resto de la lista de argumentos en una matriz.
//     ¿Cuándo ...Se produce en una llamada de función o similar, se llama “sintaxis de propagación” y expande una matriz en una lista.

// Patrones de uso:

//     Los parámetros de reposo se utilizan para crear funciones que aceptan cualquier número de argumentos.
//     La sintaxis de propagación se utiliza para pasar una matriz a funciones que normalmente requieren una lista de muchos argumentos.

// Juntos ayudan a viajar entre una lista y una variedad de parámetros con facilidad.

// Todos los argumentos de una llamada de función también están disponibles en “viejo plazo” arguments: objeto iterable similar a un array.


// Casi pero no. Los parámetros son variables definidas en la declaración de una función
//  y los argumentos son los valores reales que se pasan a la función cuando se invoca.