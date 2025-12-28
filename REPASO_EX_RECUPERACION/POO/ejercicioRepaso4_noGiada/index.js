class Vehiculo{

    tip=['turismo','suv','furgoneta'];

    constructor({id,modelo,tipo,bateria}){
        this.id=id;
        this.modelo=modelo;
        if(this.tip.find(item => item === tipo)){
            this.tipo=tipo;
        }else{
            console.log("el tipo no es correcto");
            this.tipo=tipo;
        }
      
        if(bateria< 0){
            this.bateria=0;
        }else if(bateria>100){
            this.bateria=100;
        }else{
            this.bateria=bateria;
        }
    
        
    }

    resumen(){ 
        return ` Modelo :${this.modelo} | Tipo :${this.tipo} | Carga :${this.bateria}`;

    }
}

class Sistema{

    #unidades

    constructor(){
        this.#unidades=[];

    }

registrar(vehiculo){
    this.#unidades.push(vehiculo);
}

retirar(id){
  const indice = this.#unidades.indexOf(item => item.id === id);
  this.#unidades.splice(indice,1);
}

obtenerCriticos(){
  const criticos=this.#unidades.filter(item => item.bateria<15);
  return criticos;
}

generarInforme(){
    return this.#unidades.map(item => console.log(item.resumen()));
}

 calcularCargaMedia(){

    const total = this.#unidades.reduce((acum,item) => {

     return acum+ item.bateria;
    //repasar mañana
    },0); 
    
    return total/this.#unidades.length;
  

    

  

    
 }

}

v1= new Vehiculo({id:1,tipo:"coche", modelo:"Audi A3", bateria:20});
v2= new Vehiculo({id:2,tipo:"suv", modelo:"Audo Q", bateria:10});
v3= new Vehiculo({id:3,tipo:"furgoneta", modelo:"Mecedes a2", bateria:100});
v4= new Vehiculo({id:4,tipo:"suv", modelo:"Audi Q3", bateria:50});
v5= new Vehiculo({id:5,tipo:"turismo", modelo:"Audi A3", bateria:8});



// console.log(v1.resumen());
s1=new Sistema();
s1.registrar(v1);
s1.registrar(v2);
s1.registrar(v3);
s1.registrar(v4);
s1.registrar(v5);



// s1.retirar(1);
s1.generarInforme();

// console.log(s1.obtenerCriticos());

console.log(s1.calcularCargaMedia());







