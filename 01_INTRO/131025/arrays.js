// Métodos y propiedades de los arrays

// Los arrays en JavaScript tienen varias propiedades y métodos interesantes que facilitan su manipulación. A lo largo de este capítulo y en el de programación funcional iremos viendo algunos de ellos. Entre otros:

//     length: Devuelve el número de elementos en el array.
//     sort(): Ordena los elementos del array.
//     push(): Agrega uno o más elementos al final del array.
//     pop(): Elimina y retorna el último elemento del array.

// (()=>{
//     let a=[12,3,45,6,87,0,','];
//     alert(a.length);
//     alert(a.sort());
//     alert(a.push());
//     alert(a.pop());

// })()



// Recorrer arrays

// Para iterar sobre los elementos de un array, JavaScript ofrece varias opciones:

//     for loop

a=[12,23,34,45,56]

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//     for of loop
console.log("*************************");
for (let i of a) {
    console.log(i);
}
//     forEach

a.forEach(i => console.log(i));

//     map

a.map(i => console.log(i));



// JavaScript proporciona métodos útiles para buscar elementos en un array:

//     includes(): Comprueba si un array contiene un determinado elemento.
//     find(): Retorna el primer elemento que cumple con la condición dada.
//     findIndex(): Devuelve el índice del primer elemento que cumple con la condición dada.
//     indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento.
//     filter(): Crea un nuevo array con todos los elementos que cumplen la condición.


(()=>{
const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

console.log(alligator.includes("thick scales")); // true
console.log(alligator.find(el => el.length < 12)); // '4 foot tail'
console.log(alligator.find((el, idx) => typeof el === "string" && idx === 2)); // '4 foot tail'
console.log(alligator.indexOf("rounded snout")); // 3
console.log(alligator.findIndex(el => el == "rounded snout")); // 3
console.log(alligator.filter("thick scales" )); // thick scales
})();



// Otras Operaciones en Arrays

// Existen varios métodos adicionales para manipular arrays en JavaScript:

//     splice(): Permite eliminar elementos o agregar nuevos a partir de una posición específica (modifica el array).
//     slice(): Extrae una porción del array sin modificarlo, retorna un nuevo array.
//     flat(): Convierte un array multidimensional en un array de menos dimensiones.
//     flatMap(): Aplica una función a cada elemento y aplana una dimensión del array.
//     join(): Transforma un array en una cadena.
//     split(): Transforma una cadena en un array.
//     fill(): Llena un array con un valor específico.


let array = [1, 2, 3, 4, 5];

// splice
array.splice(2, 1); // Elimina un elemento desde la posición 2
console.log(array); // [1, 2, 4, 5]

// slice
let newArray = array.slice(1, 3);
console.log(newArray); // [2, 4]

// flat
let multiArray = [1, [2, [3, 4]]];
console.log(multiArray.flat(2)); // [1, 2, 3, 4]

// flatMap
let mapArray = [1, 2, 3];
console.log(mapArray.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// join
console.log(array.join('-')); // "1-2-4-5"

// split
let str = "Hello World";
let strArray = str.split(' ');
console.log(strArray); // ["Hello", "World"]

// fill
array.fill(0, 1, 3); // Llena con 0 desde la posición 1 hasta la 3
console.log(array); // [1, 0, 0, 5]

// delete
delete array[3]; // Deja un empty
console.log(array); // [1, 0, 0, empty]
