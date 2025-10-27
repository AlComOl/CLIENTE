//it-tools.tech


//function Vehiculo(marca){
  //  this.marca=marca;

//}

//Vehiculo.prototype.informacion=function(){
  //  return `Marca del vehiculo: ${this.marca} `;
//}


//function Coche(marca,modelo){
//Vehiculo.call(this,marca);0
//this.modelo=modelo;
//}

//Coche.prototype=Object.create(Vehiculo.prototype);
//Coche.prototype.constructor=Coche;

//Coche.prototype.mostrarModelo=function(){
//    return `Modelo del coche: ${this.modelo}`;
//}

//let miCoche=new Coche('Tesla', 'Model Yris');
//console.log(miCoche.mostrarModelo);
//si comparo dos fechas no puedo compararlas tengo que pasarlas a milisegundos
let fecNac1=new Date("1975-09-19");
//let fecNac2=new Date('19-09-1975');//invalid

console.log(fecNac1);
//console.log(fecNac2);


console.log(fecNac1.getDate());
console.log(fecNac1.getDate()+1);
