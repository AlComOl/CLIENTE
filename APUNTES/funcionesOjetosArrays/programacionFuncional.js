// Functional Programming

// Se trata de un paradigma de programación (una forma de programar) donde 
// se intenta que el código se centre más en qué debe hacer una función que en cómo 
// debe hacerlo. El ejemplo más claro es que intenta evitar los bucles for y while 
// sobre arrays o listas de elementos. Normalmente cuando hacemos un bucle es para 
// recorrer la lista y realizar alguna acción con cada uno de sus elementos. 
// Lo que hace functional programing es que a la función que debe hacer eso
//  se le pasa como parámetro la función que debe aplicarse a cada elemento
//  de la lista.

// Desde la versión 5.1 javascript incorpora métodos de functional 
// programing en el lenguaje, especialmente para trabajar con arrays:
// FILTER
// Recorre el array y devuelve otro array con los elementos que cumplan la condición
// No modifica el original
//QUE QUIERO MANTENER *NO COMO LO RECORRO*

const edades=[12,4,9,18,5,23,67,89,35,50,100,105,23];

let mayoresEdad=[];

        for(let i=0;i<edades.length;i++){
            if(edades[i]>18){
                mayoresEdad.push(edades[i]);
            }
        }
        console.log(mayoresEdad);

const FilterMayores = edades.filter(edad => edad >=18);

console.log(FilterMayores);


//Ejemplo
const precios = [15, 120, 55, 300, 10, 80, 500, 25];//mayores de 100

const mayoresde100=precios.filter(precio=>precio>100);

console.log(mayoresde100);


//FILTER OBJETOS

const alumnos1 = [
  { nombre: "Ana", nota: 9 },
  { nombre: "Luis", nota: 4 },
  { nombre: "María", nota: 7 },
  { nombre: "Juan", nota: 3 },
  { nombre: "Pablo", nota: 10 }
];


const aprobados = alumnos1.filter(alumnos1=>alumnos1.nota>=5);//esto se le llama funciones lambda

console.log(aprobados);

const palabras = ["sol", "elefante", "casa", "computadora", "sol", "mar", "montaña"];

// Quedarte solo con las palabras de 5 letras o más
const longitud5=palabras.filter(lon=>lon.length>=5);//esto se le llama funciones lambda

console.log(longitud5);
// Quedarte solo con los números mayores de 20 y menores de 100
const numeros = [2, 10, 33, 50, 101, 7, 88, 150, 99];

const may=numeros.filter(may=>may>20 && may<100);//esto se le llama funciones lambda

console.log(may);



    // EJERCICIO: Dado un array con los días de la semana obtén todos los días que empiezan por ‘M’
const dias=["lunes","martes","miercoles","jueves","viernes"];

const beginM = dias.filter((dia)=>dia[0]==="m");

console.log(beginM);


// //FIND => BUSCA
// *Busca y Devuelve el elemento que cumple la condicion*
const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
const primerAprobado = arrayNotas.find(nota  => nota >=  5);


console.log(primerAprobado);


const productos = [
  { nombre: "teclado", precio: 50 },
  { nombre: "monitor", precio: 200 },
  { nombre: "ratón", precio: 25 },
  { nombre: "monitor", precio: 250 }
];

const product=productos.find(producto=>producto.precio>100);

console.log(product);



//Encuentra el primer producto cuyo precio sea mayor que 500 y que además tenga stock disponible
const produc = [
  { nombre: "Televisor", precio: 400, stock: 5 },
  { nombre: "Laptop", precio: 1200, stock: 0 },
  { nombre: "Tablet", precio: 300, stock: 8 },
  { nombre: "Smartphone", precio: 800, stock: 3 },
  { nombre: "Consola", precio: 500, stock: 0 }
];

const disp=produc.find((item)=>item.precio>500 && item.stock>0);

console.log(disp);

//findIndex MISMA SINTAXIS QUE FIND
//como find pero en vez de devolver el elemento devuelve la posición
// -1 si nadie la cumple
// tiene mas sentido con arrays de objetos

// EJERCICIO: Dado un array con los días de la semana obtén la posición en el array
//  del primer día que empieza por ‘M’

const res1=dias.findIndex((day)=>day[0]==='m');

console.log(res1);

const d=produc.findIndex((item)=>item.precio>500 && item.stock>0);


console.log(d);


// every / some
//Revisa todos los elementos que cumplem con la condición y devuelve true si TODOS cumple sino false
const e = [20, 30, 45, 18];
// const todosMayores = e.every(function(item){ return item >= 18});//funcion callback anonima tradicional
const todosMayores = e.every(e => e >= 30);//funcion flecha y callback
console.log(todosMayores); // false
//some
//Al igual que some revisa todos los elementos cumplen ALGUN elementos cumple la condicion true si no false
const algunosMayores=e.some(e => e >= 30);
console.log(algunosMayores); // true


 //MAP 
// Explicación: Recorre un array y devuelve **un nuevo array**
// con el resultado de aplicar una función a cada elemento.
// NO modifica el array original.
const nums = [1, 2, 3, 4];
const doble = nums.map(n => n * 2);
console.log("original:", nums); // [1,2,3,4]
console.log("map:", doble);     // [2,4,6,8]

// MAP con objetos (ejemplo práctico)
const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 30 }
];
const nombres = usuarios.map(u => u.nombre);
console.log(nombres); // ["Ana", "Luis"]

// Diferencia rápida con forEach y filter:
// forEach -> recorre, devuelve undefined (se usa para efectos)
// map -> transforma y devuelve un nuevo array
// filter -> devuelve un nuevo array con los elementos que cumplen una condición


function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row =[];
  
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0)
     
    }
    // Pushes the current row, which now has n zeroes in it, to the array
  
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);


