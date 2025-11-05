function sum(a, b) {
  return a + b;
}
//a una funcion se le pueden pasar los parametros que quieras pero solo se sumaran 2 en este caso

// alert( sum(1, 2, 3, 4, 5) );

//Si queremos sumar mas numeros podemos utilizar la definicion por medio de 3 puntos ...

function sullAll(...arg){

    let sum=0;
    for(let args of arg){
        sum+=args;
    }
    return sum;
}

console.log(sullAll(1,2,3,4,5,6,7,8,9,10));



//primeros parametros Variables u resto array 

function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(( titles[0] )); // Consul
  console.log(( titles[1] )); // Imperator
  let title="";
  for(title of titles){
    console.log(title);
  }
  console.log(( titles.length )); // 2
}

console.log(showName("Julius", "Caesar", "Consul", "Imperator","Andres","pepito, Juan"));


//La variable “arguments”
// el problema es que no es una matriz y no lo soporta (NO FUNCIONA EN MAP)
function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

//Las funciones flecha no tienen su porpio this , no su propio arguments

function f() {
  let showArg = () => (console.log(arguments[0],arguments[2]));
  showArg();
}

f(100,2000,3000);

// la sintaxis de propagacion tambien permite unir merged

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = ["*", ...arr, "**", ...arr2];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

//tambien se puede utilizar para convertir una cadena a matriz 
let str = "Hello";

console.log( [...str] ); // H,e,l,l,o


//COPIAR UNA MATRIZ

let arp = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arp) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arp === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arp.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3




//SE PUDE HACER LO MISMO CON UN OBJETO 
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
objCopy.x="x";
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// Esta forma de copiar un objeto es mucho más corta que let objCopy = Object.assign({}, obj)o para una matriz let arrCopy = Object.assign([], arr)Así que preferimos usarlo siempre que podemos.
// Resumen

// Cuando vemos "..."En el código, se trata de parámetros de reposo o de la sintaxis de propagación.

// Hay una manera fácil de distinguir entre ellos:

//     Cuando ...Se encuentra al final de los parámetros de la función, es “parámetros de reposo” y reúne el resto de la lista de argumentos en una matriz.
//     Cuando ...Se produce en una llamada de función o similar, se llama “sintaxis extendida” y expande una matriz en una lista.

// Utilizar patrones:

//     Los parámetros de reposo se utilizan para crear funciones que aceptan cualquier número de argumentos.
//     La sintaxis de propagación se utiliza para pasar una matriz a funciones que normalmente requieren una lista de muchos argumentos.

// Juntos ayudan a viajar entre una lista y una serie de parámetros con facilidad.

// Todos los argumentos de una llamada de función también están disponibles en “estilo antiguo” arguments: objeto iterable similar a una matriz.
