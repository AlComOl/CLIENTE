// Ejercicio 2: Métodos para modificar propiedades

// Enunciado
// Usa la clase Persona del ejercicio anterior y agrega métodos para modificar el nombre y la edad después de que el
//  objeto haya sido creado.

// class Persona{
//     constructor(nombre,edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     // saludar(){
//     //     return `Me llamo ${this.nombre} y tengo ${this.edad} años`;
//     // }
//         saludar(){
//          return `Me llamo ${this.nombre} y tengo ${this.edad} años`;
//     }
//     // getNombre(){
//     //     return this.nombre;
//     // }
//     get nom(){
//         return this.nombre;
//     }
//     // setNombre(nombre){
//     //     this.nombre=nombre;
//     // }
//      set nom(nombre){
//         this.nombre=nombre;
//     }

//     // getEdad(){
//     //     return this.edad;
//     // }
//      get eda(){
//         return this.edad;
//     }
//     // setEdad(edad){
//     //     this.edad=edad;
//     // }
//      set eda(edad){
//         this.edad=edad;
//     }

// }
// //AQUI UTILIZARIAMOS LOS SETTERS Y GETTERS COMO PROPIEDADES PARA ACCEDER A LOS ATRIBUTOS 
//     pers2= new Persona('Pepito',30);
//     pers2._nombre="Pedro";
//     console.log(pers2.nom);

//AQUI UTILIZARIAMOS LOS SETTERS Y GETTERS COMO FUNCIONES Y PODRIMOS PONER MAS LOGICA DENTRO 
//   console.log(pers2.saludar());
//   console.log("Modificamos con el setter")
//   pers2.setEdad(50);
//   console.log(pers2.saludar());
//   console.log(typeof Persona);//es una funcion
  
// //expresion de clase 

// let c= class{
//     modelo(){
//      return  "Audi";
//     }
// }
// let a = new c();
// console.log(a.modelo());


// let car= class MyClass{
//     model(){
//         console.log(MyClass);
//     }
// };
// //el nombre de la clase solo es visible dentro de la clase
// console.log(new car().model());


// function makeClass(frase){
//     return class{
//         hola(){
//             console.log(frase);
//         }
//     }
// }
// let prueba = makeClass("probando a meter una clase dentro de la funcion y llamarla");
// new prueba().hola();


// 1️ Getters y setters como propiedades
// Se usan para acceder a propiedades como si fueran normales.
// Se leen/escriben sin paréntesis:
//esto es una convencion para que no haya errores _nombre
class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {        // getter
        return this._nombre;
    }

    set nombre(valor) {   // setter
        this._nombre = valor;
    }
}

const p = new Persona("Pepito");

p.nombre = "Pedro";     // setter → NO paréntesis
console.log(p.nombre);  // getter → NO paréntesis

// 2️ Métodos tradicionales (funciones)
// Si defines un método normal (getNombre() o setNombre()), son funciones normales.
// Se deben llamar con paréntesis:

class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }

    getNombre() {        // método normal
        return this._nombre;
    }

    setNombre(valor) {   // método normal
        this._nombre = valor;
    }
}

const p = new Persona("Pepito");

p.setNombre("Pedro");  // método → se usa con paréntesis
console.log(p.getNombre()); // método → se usa con paréntesis