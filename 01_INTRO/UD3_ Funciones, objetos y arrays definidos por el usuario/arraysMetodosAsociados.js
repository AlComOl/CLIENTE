//Aqui me quedo para mañana

function loadScript(src, callback) {
  let script = document.createElement('script');//crea la etiqueta script
  script.src = src;//Le pone un atributo con la URL del archivo 

  script.onload = () => callback(script);//cuando ese script termine de cargarse ejecuta la funcion callback

  document.head.append(script);// agrega el script al head del documento
}

// Uso de Objetos

const persona = {
  nombre: 'Pepe',
  apellido: 'García',
  
  // Función regular
  consulta: function() {
    return `${this.nombre} ${this.apellido}`;
  },
  
  // Función flecha
  consultar: () => {
    // En este contexto, `this` no se refiere al objeto persona
    return `${this.nombre} ${this.apellido}`;
  }
};

console.log(persona.consulta());   // Salida: Pepe García
console.log(persona.consultar());  // Salida: undefined undefined


//  a = ['Lunes', 'Martes', 2, 4, 6];
// console.log(a[0])  // imprime 'Lunes'
// console.log(a[4])  // imprime 6
// a[7] = 'Juan'        // ahora a = ['Lunes', 'Martes', 2, 4, 6, , , 'Juan']
// console.log(a[7])  // imprime 'Juan'
// console.log(a[6])  // imprime undefined
// console.log(a[10])  // imprime undefined

// Acceder a un elemento de un array que no existe no provoca un error (devuelve undefined) pero sí lo provoca acceder a un elemento de algo que no es un array. Con ES2020 (ES11) se ha incluido el operador ?. para evitar tener que comprobar nosotros que sea un array:
// length

const b = ['Lunes', 'Martes', 2, 4, 6]
console.log(b.length)  // imprime 5

// Podemos reducir el tamaño de un array cambiando esta propiedad, aunque es una forma poco clara de hacerlo:

b.length = 3  // ahora a = ['Lunes', 'Martes', 2]


//PRINCIPALES METODOS DE LOS ARRAYS

//AGREGAR Y ELIMINAR ITEMS

   const arr=["hola",4, 6, "Adios"];

    

    // arr.push(...items) – agrega ítems al final,
    arr.push("push");
    console.log(arr);
    // arr.pop() – extrae un ítem del final,
    let pop=arr.pop();
    console.log(pop);
    // arr.shift() – extrae un ítem del inicio,
    let shift=arr.shift();
    console.log(shift);
    console.log(arr)
    // arr.unshift(...items) – agrega ítems al principio.
    arr.unshift("Pepe");
    console.log(arr);

    // splice
    //Permite eliminar elementos de cualquier posición del array y/o insertar otros en su lugar. Devuelve un array con los elementos eliminados. 
    //arr.splice(start[, deleteCount, elem1, ..., elemN])
    //indices negativos no estan permitidos 

    let ar = ["Yo", "estudio", "JavaScript"];

    ar.splice(2, 1, "php"); // desde el índice 1, remover 1 elemento

    console.log( ar ); // ["Yo", "JavaScript"]


    let comunidad=["Jorge","Conrada","Cristian","Alejandro","Señor"];

    let newCom=comunidad.splice(1,1,"Vicenta");

    newCom.splice(0,1,"Juan","Luis","Andres","Vicente");

      console.log(comunidad);
      console.log(newCom);
      comunidad.splice(2,2);
      console.log(comunidad);

  //slice

  // devuelve un subarray con elementos indicados, si modificar el array origianal

  // slice(inicio, fin) → devuelve elementos desde inicio hasta ANTES de fin.

 let oliver=["Carmen","Oreto","Mariano"];
 let splOliver=oliver.splice()

 let subOliver = oliver.slice(1,2);

 let sd=["sillas","mesas","sofas","coches","ventanas","cojines","bolsas","nevera"];
 let subsd=sd.slice(2,6);
 console.log(subOliver);
 console.log(subsd);


 //Arrays y strings
// Cada objeto tiene definido un metodo toString() que lo convierte a cadena, este es llamado automaticamente , por ejemplo cuanmdo 
// queremos mostrar algo en consola.Cada
//JOIN
//para pasar un array a cadena utilizamos join(), especificando el caracter separador

const a = ['Lunes', 'Martes', 2, 4, 6]
const cadena = a.join('-')   
console.log(cadena);
const hola=["h","o","l","a"];
const holaCadena=hola.join("");
console.log(holaCadena);
//SPLIT
//Lo contrario de join es split() lo que hace es convertir una cadena en array
const array=cadena.split("");//sino ponemos espacios lo separará por letras
// const array=cadena.split(" ");//si ponemos espacio lo separara por espacion 
console.log(array);
console.log(array.length);
cadena.split("-");
console.log(array);


let cadena1="adios";
console.log(cadena1);

const array1=cadena1.split("-");
console.log(array1);


//SORT 
//Oredena alfabeticamente los elementos del array , cambia el array ademaás de devolverlo

const d = ['hola','adios','bien','mal'];

let c = d.sort();

console.log(c);

//si son numeros los ordena alfabeticamente OJO CON LOS NÚMEROS

const n=[10,30,50,1,4,50,2];

let o=n.sort();
console.log(o);

//habria que pasar una funcion a sort 
//callback es una funcion que se le pasa por argumento otra
//expresion como funcion 
let callback =function(a,b){
  return a-b;
}
 o=n.sort(callback);

 console.log("expresion como funcion => "+o);

 //funcion flecha 

 let o1=n.sort((a,b)=>a-b);

 console.log("flecha => "+o1);

// Mas funciones sort para ordenar un array de numeros y cadenas con mayusculas NO SIRVE PARA NUMEROS

let a1 = ['hola', 'adios', 'Bien', 'Mal'];
let b1 = a1.sort(function(elem1, elem2) {
  let e1 = elem1.toLocaleLowerCase();  
  let e2 = elem2.toLocaleLowerCase();  

  if (e1 < e2) return -1;  // e1 va antes que e2
  if (e1 > e2) return 1;   // e1 va después que e2
  return 0;
});     

console.log(b1);
//OPERACIONES CON ARRAYS DE OBJETOS
// const alumnos = [
//   {
//     id: 1,
//     name: 'Marc Peris',
//     course: '2nDAW',
//     age: 21
//   },
//   {
//     id: 2,
//     name: 'Júlia Tortosa',
//     course: '2nDAW',
//     age: 23
//   },
// ]

//DONDE MAS SE USA ES PARA ORDENAR OBJETOS 
// por ejemplo un objetos de personas con nombre y edad, ordenarlos por edad

const alumnos=[
  {
    nombre: "Alvaro",
    edad:"50"
  },
  {
    nombre:"Juan",
    edad:"54"
  },
  {
    nombre:"Andres",
    edad:"20"
  },
  {
    nombre:"Luis",
    edad:"23"
  }
]
//expresion como funcion
// let edad=alumnos.sort(function(alumno1,alumno2){
   
//    return alumno1.edad - alumno2.edad ;
  

// })

// console.log(edad);
//prueba

const alumOrdEdad= alumnos.sort(function(alu1,alu2){
  if(alu1.edad>alu2.edad)return 1;
  if(alu1.edad<alu2)return -1;
  return 0;
});

console.log("PRUEBA");
console.log(alumOrdEdad);




//funcion flecha
// let edad1=alumnos.sort()

// let edad2=alumnos.sort((alumno1,alumno2)=>alumno1.edad-alumno2.edad);

// console.log(edad2);
//EJEMPLOS 
// Ordena los coches por precio de menor a mayor usando FUNCIÓN FLECHA
const coches = [
  { marca: "Toyota", precio: 15000 },
  { marca: "BMW", precio: 32000 },
  { marca: "Seat", precio: 12000 },
  { marca: "Audi", precio: 28000 }
];

const cochesOrd = coches.sort((coches1,coches2)=>coches1.precio-coches2.precio); 

console.log(cochesOrd);

// Ordena los coches por marca A-Z usando FUNCIÓN EXPRESIÓN

let cochesOrdLetra=coches.sort(function(coches1,coches2){

    let a1=coches1.marca.toLowerCase();
    console.log(a1);
   
    let a2=coches2.marca.toLowerCase();
    console.log(a2);
  if(a1 > a2) return 1;
  if(a1 < a2) return -1;
  return 0;
  
});

console.log(cochesOrdLetra);

//Funcion Flecha

let cochesOrdLetraFlecha=coches.sort((a1,a2)=>{
 let m1=a1.marca.toLowerCase();
 let m2=a2.marca.toLowerCase();
 
   if(m1>m2)return 1;
   if(m1<m2)return -1;
   return 0;
});
    
console.log(cochesOrdLetraFlecha);

// EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro.
//  Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola

let notas=[4,8,3,10,5];

let notasOrd=notas.sort((n1,n2)=>n1-n2);

console.log(notasOrd);



