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



