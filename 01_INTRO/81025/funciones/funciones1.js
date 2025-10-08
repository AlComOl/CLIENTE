// Valores predeterminados

// function showMessage(from, text = "no text given") {
//   console.log( from + ": " + text );
// }

// showMessage("Ann"); // Ann: no text given



// function showMessage(from, text) {
//   console.log( from + ": " + text );
// }

// showMessage("Ann"); // Ann: undefined
// function anotherFunction(){
//     console.log("esta dentro de la funcion")
//     return "El sitio es indefinido";


// }


// function showMessage(from, text = anotherFunction()) {
//   // anotherFunction() o,nly executed if no text given
//   // its result becomes the value of text
// console.log(from);
// console.log(text);
// console.log("**************************")
// return console.log("hola");
// }
// showMessage("Londres","Ana");//si le pasas un valor no ejecuta la funcion 
// showMessage("Ann");//si no le pasas valor ejecuta la funcion, pero primero entra dentro de ella 



//Parámetros predeterminados alternativos

// function showMessage(text) {
//   // ...

//   if (text === undefined) { // if the parameter is missing
//     text = 'empty message';
//   }

//   console.log(text);
// }

// showMessage(); // empty message

//Devolver un valor
    // function sum(a, b) {
    // return a + b;
    // }

    // let result = sum(1, 2);
    // console( result ); // 3


// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }


// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Showing you the movie" ); // (*)
//   // ...
// }

// console.log(showMovie(18));


// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Showing you the movie" ); // (*)
//   // ...
// }

// function doNothing() {
//     let Hola;
//     return Hola;}

// alert( doNothing() === undefined ); // true


//Funciones == Comentarios

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // a prime
//   }
// }

// console.log(showPrimes(12));

//LA funcion dividida en 2 

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }



function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
//Variantes sin if

function VariantCkeckAge(age){

    let res=age>18?true:"Did aprents allow you?";

    return res;
}

function VariantCkeckAge(age){

   return (age>18 || "Did aprents allow you?");

   
}