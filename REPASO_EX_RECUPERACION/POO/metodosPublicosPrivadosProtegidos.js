
//Metodos publicos-acesible desde cualquier lugar

class Nevera{
    capacidad=0;
    constructor(capacidad){
        this.capacidad=capacidad;
    }
}
 let nevera1= new Nevera(100);
 //en este caso podriamos cambiar la capacidad de la nevera desde fuera
 nevera1.capacidad=300;
 console.log(nevera1.capacidad);

//Metodos privados-acesibles desde dentro de la clase
class Frigorifico{
    #capacidad;
    constructor(capacidad){
        this.#capacidad=capacidad;
    }
getCapacidad(){
 return this.#capacidad;
}
setCApacidad(capacidad){
    this.#capacidad=capacidad;
}
}
frigorifico1=new Frigorifico(200);
//console.log(frigorifico1.capacidad);//aqui me daria undefined porque es privado tendria que acceder con getters y seters par amodificarlo
 console.log(frigorifico1.getCapacidad());



//Metodos protegidos-acesibles desde las subclases o heredan
class Enfriador{
    _capacidad=50;

    // constructor(capacidad){ //al no haber constructor la cantidad pasa al heredero MegaEnfriador
    //     this._capacidad=capacidad;
    // }
    getCapacidad(){
        return this._capacidad;
    }
}
enfriador1=new Enfriador();
console.log(enfriador1.getCapacidad());
class MegaEnfirador extends Enfriador{

    constructor(capacidad){
    super(capacidad)
      
    }

    method(){
        console.log(this._capacidad);
    }
}
Mega1 = new MegaEnfirador();
console.log(Mega1.method());//pudiendo ver la capacidad aqui 

