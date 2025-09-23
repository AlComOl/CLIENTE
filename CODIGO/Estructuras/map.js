//Map es una estructura para poder almacenar un conjunto de datos .Coleccion de elementos, estan formados par de datos CLAVE Y VALOR 
//Declaración
let myMap=new Map();

console.log(myMap);

//Inicializacion

myMap=new Map([
    ["name", "Alvaro"],
    ["Apellidos", "Comenge Oliver"],
    ["Dirección", "C/Escritor Rafael Ferreres n4"],
    ["Codigo POstal", "46013"],
    ["Ciudad", "Valencia"]
    
]);

console.log(myMap);

//metodos y propiedades

//set
//si la clave no existe añade
myMap.set("Alias", "Alvaret");
//si la clave no existe modifica 
myMap.set("name","Noelia");

console.log(myMap);


//get 
//lo busca por clave 
console.log(myMap.get("Alias"));

//has
//comprueba si esta la clave devuelve tru o false 
let item=myMap.has("Apellidos");

console.log(item);

///delete borrar con la clave 1 a 1 

myMap.delete("Alias");

console.log(myMap);

//clear borrar todo 
// myMap.clear();

console.log(myMap);

//keys nos saca las clves del map

console.log(myMap.keys());

//Value nos saca los value

console.log(myMap.values());
//Entries es una forma de recorrer sale todo 

console.log(myMap.entries());

//size nos dice las claves que hay dentro 

console.log(myMap.size);


