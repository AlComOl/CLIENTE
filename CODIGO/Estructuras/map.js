//Map es una estructura para poder almacenar un conjunto de datos .Coleccion de elementos, estan formados par de datos CLAVE Y VALOR 

//Declaración
let myMap=new Map();

console.log(myMap);

//Inicializacion

myMap=new Map([
    ["name", "Alvaro"],
    ["Apellidos", "Comenge Oliver"],
    ["Dirección", "C/Escritor Rafael Ferreres n4"],
    ["Codigo Postal", "46013"],
    ["Ciudad", "Valencia"]
    
]);

console.log(myMap);

//metodos y propiedades

//set ACTUALIZAR/AGREGAR
//si la clave no existe añade
myMap.set("Alias", "Alvaret");
//si la clave no existe modifica 
myMap.set("name","Noelia");

console.log(myMap);


//get  RECUPERAR EL VALOR
//lo busca por clave 
console.log(myMap.get("Alias"));

//has
//comprueba si esta la clave devuelve true o false 
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


// Los métodos y propiedades son:

//     new Map()– crea el mapa.
console.log("***************************************************************");
    Myproperties=new Map([
        ["Valencia","c/Escritor Ferreres n4"],
        ["L'Alcudia0", "c/San Roque n 11"],
        ["L'Alcudia1" ,"c/Ernest LLuc s/n"],
        ["L'Alcudia2" , "c/ poligono 10"],

    ]);
    myMovies=([
        {"titulo":"hola","raiting":"1","duracion":"3h"},
        {"titulo":"Adios","raiting":"2","duracion":"4h"},
        {"titulo":"hello","raiting":"3","duracion":"5h"}
    ]);
//     map.set(key, value)– almacena el valor por la clave.

       console.log(Myproperties.set("Sevilla","c/Escritor Ferreres n5"));

//     map.get(key)– devuelve el valor por la clave, undefinedSi keyNo existe en el mapa.
        console.log(Myproperties.get("Sevilla"));
//     map.has(key)– retornos trueSi el keyExiste, falseDe lo contrario.
        console.log(Myproperties.has("L'Alcudia0"));
//     map.delete(key)– elimina el elemento (el par clave/valor) por la clave.
        console.log(Myproperties.delete("L'Alcudia0"));
            console.log(Myproperties);
//     map.clear()– elimina todo del mapa.
//     map.size– devuelve el recuento de elementos actual.
        console.log(Myproperties.size);

//construir el array con las propiedades que yo quiero
const arr=myMovies.map(valor =>{
    return {
        titulo:valor.titulo,
        raiting:valor.raiting,

    };
});

    console.log(arr);



