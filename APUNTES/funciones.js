// let entrada = prompt('que edad tienes ');
// let salida= document.getElementById('salida');

// if(entrada>18){
//     salida.innerHTML="Eres mayor de edad";
    
// }else{
//     salida.innerHTML="Eres menor de edad";  
// }

//DECLARACIONES DE FUNCIONES 
//si la funcion no lleva un return dara undefined
function showMessage() {
  console.log( '¡Hola a todos!' );
}

//las variables declaradas dentro de la funcion solo se veran dentro de la funcion 
// function showMessage() {
//   let message = "Hola, ¡Soy JavaScript!"; // variable local

//   console.log( message );
// }

// showMessage(); // Hola, ¡Soy JavaScript!

// console.log( message ); // <-- ¡Error! La variable es local para esta función


// si se llama a la funcion y cambiamos la variable al llamarla estara cambiada
// let userName = 'Juan';

// function showMessage() {
//   userName = 'Bob'; // (1) Cambió la variable externa

//   let message = 'Hola, ' + userName;
//   console.log(message);
// }

// console.log( userName ); // Juan antes de llamar la función

// showMessage();

// console.log( userName ); // Bob, el valor fué modificado por la función


// //si no se pasa el valor text la funcion cogera el valor de sin texto 
// function showMessage(from, text = "sin texto") {
//   console.log( from + ": " + text );
// }

// showMessage("Ann"); // Ann: sin texto

// //Variante para encontrar si es primo 
// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

//EXPRESIONES COMO FUNCIONES

let sayHi = function() {
console.log( "Hello" );
};

// si hacemos console log de sayhi veremos el codigo 
console.log(sayHi);
//si hacemos consolo log de sayhi() veremos la ejecucion de la funcion 
console.log(sayHi());

//si hacemos una declaracion como funcion podras ejecutarla antes y despues 
sayHi1("John"); // Hello, John

function sayHi1(name) {
  console.log( `Hello, ${name}` );
}
// si lo que hacemos es una expresion como funcion no se ejecutara en cualquier momento solo despues de declararlo

// sayHi2("John"); // error!
let sayHi2 = function(name) {  // (*) no magic any more
  console.log( `Hello, ${name}` );
};


// Esto se debe a que una Declaración de Función solo es visible dentro del bloque de código en el que reside.

// Aquí hay otro ejemplo:

let age1 = 16; // take 16 as an example

if (age1 < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    console.log("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    console.log("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined

// ¿Qué podemos hacer para hacer welcomeVisible fuera de if?

// El enfoque correcto sería utilizar una Expresión de Función y asignar welcomea la variable que se declara fuera de ifY tiene la visibilidad adecuada.

// Este código funciona según lo previsto:

let age2 = prompt("What is your age?", 18);

let welcome2;

if (age2 < 18) {

  welcome2 = function() {
    console.log("Hello!");
  };

} else {

  welcome2 = function() {
    console.log("Greetings!");
  };

}

welcome2(); // ok now

//O podríamos simplificarlo aún más utilizando un operador de signo de interrogación ?:

let age3 = prompt("What is your age?", 18);

let welcome3 = (age3 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome3(); // ok now




//FUNCIONES FLECHA

// ejemplo de funcion flecha simple 

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3


// Reescribir con funciones de flecha

// Reemplace las expresiones de función con funciones de flecha en el código :

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

