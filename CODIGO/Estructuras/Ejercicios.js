//Crea un array que almacena 5 animales

let animals= ["perro","gato","pez","Hipopotamo","Elefante"];



//2_Añade dos mas. Uno al principio y otro al final

animals.push("Koala");
animals.unshift("Oso");

// animals.splice(0,0,"Oso");

// console.log(animals);


//3-Elimina el que se encuentra en la segunda posición
//////////////posicion inicial--cantidad a eliminar/////////
animals.splice(1,1);

// console.log(animals)


//Crea un set que almacene 5 libros 

 mySet=new Set(["Lo que el viento se llevo", "El camino del despertar","Economia domestica", "El inversor inteligente","Buenas pricticas",]);

console.log(mySet);


//Añade 2 mas:Uno de ellos repetido// en un set no se pueden añadir elementos repetidos
mySet.add("La viuda negra");
mySet.add("lo que el viento se llevo");
console.log(mySet);

//Elimina uno concreto a tu eleccion 
mySet.delete("La viuda negra");
console.log(mySet);


//7-Crea un mapa que asocie el numero de mes a su nombre
let myMap = new Map();

myMap=new Map([
    [1,"Alvaro"],
    [2,"Vicente"],
    [3,"Jose"],
    [4,"Luis"],
    [5,"luis"],
    [6,"Andres"],
]);

console.log(myMap);

//8-Comprueba que el mes numero 5 existe en el map e imprime su valor


console.log(myMap.get(5));


//9_ Añade al mapa una clave con un array con que almacene los meses de verano
let verano=["Junio","Julio","Agosto"];

console.log(verano);

myMap.set("verano",verano);

console.log([myMap.entries()]);


//Crea un array transformalo a un set y almacenalo en un map