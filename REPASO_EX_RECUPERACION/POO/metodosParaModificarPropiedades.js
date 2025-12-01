// Ejercicio 2: Métodos para modificar propiedades

// Enunciado
// Usa la clase Persona del ejercicio anterior y agrega métodos para modificar el nombre y la edad después de que el
//  objeto haya sido creado.

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        return `Me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edad){
        this.edad=edad;
    }
}
  pers2= new Persona('Pepito',30);
  console.log(pers2.saludar());
  console.log("Modificamos con el setter")
  pers2.setEdad(50);
  console.log(pers2.saludar());

  console.log(typeof Persona);//es una funcion
  
//expresion de clase 

let c= class{
    modelo(){
     return  "Audi";
    }
}
let a = new c();
console.log(a.modelo());


let car= class MyClass{
    model(){
        console.log(MyClass);
    }
};
//el nombre de la clase solo es visible dentro de la clase
console.log(new car().model());


function makeClass(frase){
    return class{
        hola(){
            console.log(frase);
        }
    }
}
let prueba = makeClass("probando a meter una clase dentro de la funcion y llamarla");
new prueba().hola();


