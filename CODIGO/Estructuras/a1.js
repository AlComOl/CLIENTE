//declaracion de array
let myArray=[];
//si creamos esta sintaxis esta reservando
let myArray1=new Array();
//asi se lo traga tambien 
myArray2=[];

console.log("hola Mundo");

console.log(myArray);

console.log(myArray1);

console.log(myArray2);

//introducir cosas dentro del array

myArray.push("Alvaro");
myArray.push("Comenge");
myArray.push("Oliver");

//saca los elementos del array

myArray.pop();
//elimina el ultimo elemento del array
console.log(myArray);

//tambien puede guardarlo POP es el ultimo elemento
let item=myArray.pop()

console.log(item);

//Shift y unshift
//Shift elimina el primer elemento del array igual que el pop

let myArray3=["Hola", "Mundo", "adios"]

myArray3.shift();

console.log(myArray3);


 //Un shift sive para agregar elementos AL PRINCIPIO del array

myArray3.unshift("Alvaro", "Comenge");

console.log(myArray3);

myArray3.length;

console.log(myArray3.length);
//slice hace una copia de la porcion que le indicamos 

let nuevo=myArray3.slice(1,3);

console.log(nuevo);

//splice elimina des el indice que quieres empezar y los elementos que quieres eliminar

let myArray4=["Lunes","Martes", "Miercoles","Jueves","Viernes"];
//desde la posicion 2 quiero eliminar o en este caso guardar 3 posiciones 
let item1=myArray4.splice(2,3);

console.log(item1);
