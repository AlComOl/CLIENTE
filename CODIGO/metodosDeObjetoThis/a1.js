
//representacion de un Objeto
let user={
    name :"John",
    ade:30
};
// Aquí estamos creando una función anónima (sin nombre propio) directamente al asignarla a user.sayHi.

// Es una expresión de función porque la función se define en el momento de la asignación.
// Esa función solo vive dentro de la propiedad sayHi.No tiene nombre propio, solo vive dentro del objeto
//aqui creas una funcion cada vez
// user.sayHi = function() {
//   console.log("Hello!");
// }
// //Función declarada por separado y luego guardamos una referencia a ella dentro del 
// // Tiene nombre se puede utilizar en varios objetos(Es decir user.sayBye APUNTA a la misma funcion say bye)
// function sayBye(){
//   console.log("Bye Bye??");
// }
// //creas la funcion y la referencias al Objeto
//  user.sayBye=sayBye;
//  user.sayBye();


// ¿qué es un método?

// Una función que pertenece a un objeto (es decir, que está guardada como una de sus propiedades) se llama método.

//En resumen:

// Si una función está "suelta", la llamamos función.

// Si una función está dentro de un objeto, la llamamos método.

// Piensa en un objeto como una persona:

// Tiene propiedades (como nombre, edad, dirección…)

// Tiene acciones o comportamientos, que son sus métodos (como hablar, caminar, comer…)

// user.sayHi(); // Hello!
// Método de la abreviatura

// Existe una sintaxis más corta para los métodos en un objeto literal:

// Los Objetos hacen lo mismo 

// user = {
//   sayHi: function() {
//     alert("Hello");
//   }
// };

// // method shorthand looks better, right?
// user = {
//   sayHi() { // same as "sayHi: function(){...}"
//     alert("Hello");
//   }
// };





// Qué es el hoisting

// Hoisting significa literalmente “elevar” o “subir”.
// Con el hoisting, si haces una declaración de función, sí puedes llamarla antes de definirla,
//  porque JavaScript la sube a la parte superior del código.
// Pero si haces una expresión de función (la guardas en una variable),
//  no puedes llamarla antes, porque la función no existe todavía en memoria hasta que se ejecuta esa línea.
// sayHi(); // ✅ Funciona

// function sayHi() {
//   console.log("Hola!");
// }


// sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

// const sayHi = function() {
//   console.log("Hola!");
// };



//***********************************************THIS ***************************************************/


// let cliente=[

//  { 
//   nombre : "Alvaro Comenge de la Flor", 
//   empresa : "AgroCondicion",
//   trabajadores: 3,
//   antiguedad: 5 ,
//   descuento : 20,
//   idioma:"English",
//   sayHi(){
//     console.log(this.nombre);
//   }

// },
// {
//   nombre : "Alejandro Comenge de la Flor", 
//   empresa : "Texmetal",
//   trabajadores: 13,
//   antiguedad: 10 ,
//   descuento : 30,
//   idioma:"Español",
//   sayHi(){
//     console.log(this.nombre);
//   }
// }

// ];

// //si hermano hace referencia a cliente
// let hermano = cliente;
// // cliente no se borra de la memoria porque cliente apunta a hermano
// cliente=null;

// //pero al intentar acceder al cliente como apunta a null no saca nada.
// hermano[0].sayHi();
// hermano[1].sayHi();




// let arr=[

//  { 
//   nombre : "Alvaro Comenge de la Flor", 
//   empresa : "AgroCondicion",
//   trabajadores: 3,
//   antiguedad: 5 ,
//   descuento : 20,
//   idioma:"English",
//   sayHi(){
//     console.log(this.nombre);
//   }

// },
// {
//   nombre : "Alejandro Comenge de la Flor", 
//   empresa : "Texmetal",
//   trabajadores: 13,
//   antiguedad: 10 ,
//   descuento : 30,
//   idioma:"Español",
//   sayHi(){
//     console.log(this.nombre);
//   }
// }

// ];

// //si hermano hace referencia a cliente
// let arr1 = arr;
// // cliente no se borra de la memoria porque hermano apunta a el sigue en la memoria
// arr=null;
// aqui al poner el this en nombre el this hace referencia al arr todavia y nois sacaria el nombre gi
// arr1[0].sayHi();
// arr1[1].sayHi();




let encargado = {
  nombre:"Florentino",
  age:45,
  empresa:"Imecal"
}


encargado.decirAdios = function(){
  console.log("hello");
};

//Aquí acabamos de usar una Expresión de Función para crear una función y asignarla a la propiedad
//  encargado.decirAdios Del objeto.
////Una función que es una propiedad de un objeto se llama su método//////IMPORTANTE
encargado.decirAdios();



//Podriamos usar una funcion predeclarada como método, como este 

let paciente={
  nombre:"Vicente",
  edad:50,
  hospital:"Peset"
}

function diHola(){
  console.log("hello");
}

paciente.diHola=diHola;

console.log(paciente)
console.log(encargado);


//Tambien existe una sintaxis mas corta para los metisos en un objeto literal

let programador = {
//hay 2 sintaxis y estan bien las 2 hay diferencias en cuanto la herencia de objetos
  // nombre : "Raul",
  // edad : 25,
  // lenguaje: function(){
  //   console.log("Java Script");
  // }
  


  //Otra sintaxis esta se prefiere es mas corta 
  nombre : "Álvaro",
  edad : 50,
  lenguaje(){
    console.log("php");
  },
   diHola(){//tambien podemos utilizar el this para invocar a una propiedad del objeto
    console.log("Hola soy "+this.nombre);
  }, 

  diEdad(){//tecnicamente tambien es posible acceder atraves de la variable externa *ESTO NO ES CONFIABLE
    console.log("Hola tengo "+programador.edad);
  },
  experiencia: "estoy en practicas"

}
  programador.lenguaje();
  programador.diHola();
  programador.diEdad();


//Si decidimos copiar programador a tecnicalProgramer y sobrescribir programador con otra cosa
// *ENTONCES ACEDERA AL OBJETO EQUIVOVADO

seniorProgramer = programador;
// programador = null;

//en la funcion que he utilizado el this podre acceder 

    seniorProgramer.diHola();//CON this
//  seniorProgramer.diEdad();//SIN this DA ERROR 



// El valor de thisSe evalúa durante el tiempo de ejecución, dependiendo del contexto.

// Por ejemplo, aquí la misma función se asigna a dos objetos diferentes y tiene diferente “this” en las llamadas:

let user1 ={nombre:"Andres", edad:"20"};
let admin1={nombre:"Luis", edad:"Raul"};

// Al asignar la misma función a diferentes objetos y luego ejecutarla como un método (objeto.función()),
//  la palabra clave this apunta al objeto que realiza la llamada.
// En este caso, this toma el valor de user1 o admin1 dependiendo de quién ejecuta la función.

function nombre(){
  console.log(this.nombre);
}

user1.f=nombre;
admin1.f=nombre;

user1.f()// al aplicar el this cada metodo apunta a un objeto
admin1.f();


/////////////////////////FUNCIONES FLECHA NO TIENEN EL THIS///////////////////////////////////////////////////



