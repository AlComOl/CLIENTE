function Vehiculo(marca){
    this.marca=marca;

}

Vehiculo.prototype.informacion=function(){
    return `Marca del vehiculo: ${this.marca} `;
}


function Coche(marca,modelo){
Vehiculo.call(this,marca);
this.modelo=modelo;
}

Coche.prototype=Object.create(Vehiculo.prototype);
Coche.prototype.constructor=Coche;

Coche.prototype.mostrarModelo=function(){
    return `Modelo del coche: ${this.modelo}`;
}

let miCoche=new Coche('Tesla', 'Model Yris');
console.log(miCoche.mostrarModelo);