"use strict";

// let hola= function(){
//     console.log("Hello");
// };

// console.log(hola);


// Funciones de devolucion de llamada 

// function ask(question,yes,no){
//     if (confirm(question)) yes();
//        else no(); 
// }

// function showOk(){
//     alert("You agree");
// }

// function showCancel(){
//     alert("You canceled the execusion");
// }

// ask("Do you agree",showOk,showCancel);

// let age = prompt("What is your age?", 18);

// // let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };
// // function welcome(){
// //     alert('Hello'); LA DECLARACION DE FUNCION NO FUNCIONA FUERA DEL SCOPE
// // }

// } else {

//   welcome = function() {// LA EXPRESION DE FUNCION SE PUEDE LLAMAR FUERA
//     alert("Greetings!");
//   };

// // function welcome(){
// //     alert('Gettings');
// // }

// }

//  welcome(); // ok now

// Podriamos simplificarlo aun mas 

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now





// ¿Cuándo elegir la declaración de función frente a la expresión de función?

// Como regla general, cuando necesitamos declarar una función, lo primero a considerar es la sintaxis de la Declaración de Función. Da más libertad en cómo organizar nuestro código, porque podemos llamar a tales funciones antes de que se declaren.

// Eso también es mejor para la legibilidad, ya que es más fácil de buscar function f(…) {…}En el código que let f = function(…) {…};. Las declaraciones de función son más “llamadas”.

// Pero si una Declaración de Función no nos conviene por alguna razón, o necesitamos una declaración condicional (acabamos de ver un ejemplo), entonces la Expresión de Función debe ser utilizada.


// FUNCIONES FLECHA


let sum = (a,b) => a+b;

alert(2,3);

//si solo tenemos un argumento entoces omitimos los parentesis

let doble = n => n*2;

alert(3);

//si no hay argumentos los parentesis deben estar vacion pero presentes

let sayHi= () => alert("Say Hi");

//Las funciones flecha se pueden utilizar de la misma manera que las expresiones de funcion 

let age1 = prompt("What is your age?", 18);

let welcome1 = (age1 < 18) ?
    ()=>alert("helloo") :
    ()=>alert("Gettings");

//FUNCIONES FLECHA MULTILINEA, SON PARA EXPRESIONES MAS COMPLEJAS

let sum1 = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum1(1, 2) ); // 3



//EJEMPLO 

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

///CONVIERTE EN FLECHA


let ask= (question,yes,no) => {
    if(confirm(question))
        return yes()
    else
        return no();
}

ask("Do you deadre", ()=>alert("you",()=>("cancelled")));

