// Enunciado
// Define una clase Persona con las propiedades nombre y edad. Incluye un método que permita
// mostrar un mensaje de saludo con el nombre y la edad de la persona.

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
      return `Hola me llamo ${this.nombre} y tengo ${this.edad} de edad`;      
     }   
}
 let persona1=new Persona('Alvaro', '50'); 
   
 persona1.saludar();
