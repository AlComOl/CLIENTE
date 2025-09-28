//Estructuras Basicas

//Arrays
//colección de elementos en una m isma variable, ubicados por posición
//hay varias maneras de crearlos
const letters = ["a", "b", "c"];  // Array con 3 elementos
const letters1 = [];               // Array vacío (0 elementos)
const letters2 = ["a", 5, true];   // Array mixto (String, Number, Boolean)

console.log(letters);
console.log(letters1);
console.log(letters2);

const a=new Array(1,2,3,4,5,6);
console.log(a);

//ACCESO A LOS ELEMENTOS DEL ARRAY

//propiedad que devuelve el numero de elementos
console.log(a.length);
//posicion concreta
console.log(a[1]);
console.log(a[9]);//undefined
//el metodo at hace lo mismo
console.log(a.at(0));
//metodo with crea una copia y modifica el elemento(al crear una copia , hay que declarar otro elemento para ponerlo dentro)
let nuevo=a.with(0,10);
console.log(nuevo);

//añadir o eliminar elementos

a.push("a");
console.log(a);

//elimina un elemento

a.pop("a");
console.log(a);

//lo quita de atras alante como desapilar

let item=a.pop();
console.log(a);


//Shift y Unshift
//mete elementos delante
let b=[10,11,12,13,14];
b.unshift(2);
console.log(b);
//shift al modificar hay que crear uno 
//shift elimina la primera pos siempre y modifica el array
let n=b.shift();
console.log(n);
console.log(b)

//CONCAT concadena los arrays
console.log("///////////////a difencia de push no modifica de push///////////////////")
let c=a.concat(a);
console.log(c);

//También hay que tener cuidado al utilizar el operador + con los arrays.
//A diferencia de lo que quizás puede parecer intuitivo, utilizando este operador no se añaden 
//los elementos al array, sino que se convierten los arrays en string y luego se concatenan.
//Veremos más sobre estas conversiones implícitas en temas posterior


