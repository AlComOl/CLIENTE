class Evento{

    constructor({codigo,nombre,fecha,aforoMaximo}){
        this.codigo=codigo;
        this.nombre=nombre;
        this.fecha=fecha;
        this.aforoMaximo=aforoMaximo
    }

    resumen(){
        return `Evento: ${this.nombre} - Codigo:${this.codigo}-Fecha:${this.fecha},-AforoMaximo${this.aforoMaximo}`;
    }
    
}


// 1.1.1 Clases Derivadas (Herencia)

class Concierto extends Evento{

    constructor({codigo,nombre,fecha,aforoMaximo,banda}){//porque banda luce de otro color 
        super(codigo,nombre,fecha,aforoMaximo);
        this.codigo=codigo;
        this.nombre=nombre;
        this.fecha=fecha;
        this.aforoMaximo=aforoMaximo;
        this.banda=banda;
    }

esGrande(aforoMaximo){
    const aforo= aforoMaximo>10000?false:true;
    return aforo;
     
}

}
class Taller extends Evento{

    constructor({codigo,nombre,fecha,aforoMaximo,duracionHoras}){
        super(codigo,nombre,fecha,aforoMaximo);
        this.codigo=codigo;
        this.nombre=nombre;
        this.fecha=fecha;
        this.aforoMaximo=aforoMaximo;
        this.duracionHoras=duracionHoras;
    }

    calcularCosto(tarifaFija){
        return this.duracionHoras*tarifaFija;

    }

}
class Calculadora{

    static calcularDiasrestantes(fechaEvento){

      let diaHoy=Date.now();
      let diaEvento=Date.parse(fechaEvento);
      let diferencia=diaEvento-diaHoy; //en milisegundos
   return (diferencia/(1000*60*60*24));


    }

    static formatearAforo(aforo){

    }
    
}

class GestorEventos{

    #calendario;

    constructor(){
       this.#calendario=[];
    }

    agregarevento(evento){
        this.#calendario.push(evento);
        return "agregado evento";
    }

    eliminarEvento(codigo){
        let index=this.#calendario.findIndex(item => item.codigo == codigo);
       
        this.#calendario.splice(index,1);

        return "eleminado";
    }

    listarResumenesFormateados(){

        return this.#calendario.forEach(item => console.log(item));
    }




}


//clase Base 

const tallerLunes=new Taller({nombre:'Singers_Play',codigo:'456789',fecha:'2025-08-10',aforoMaximo:5000,duracionHoras:6});

// console.log(eventoLunes.resumen());

//Concierto o Taller

const concierto1= new Concierto({nombre:'Singers_Play',codigo:'4',fecha:'2025-08-10',aforoMaximo:5000,banda:'U2'});

// console.log(concierto1.esGrande(20000));

// const taller1= new Taller({nombre:'Singers_Play',codigo:'456789',fecha:'2025-08-10',aforoMaximo:5000,duracionHoras:5});

// console.log(taller1.calcularCosto(10));

//ver dias restantes al evento

// console.log(Calculadora.calcularDiasrestantes('2026-08-05'));

//añadir evento



const eventos = new GestorEventos()
//añadir eventos a la coleccion
eventos.agregarevento(tallerLunes);
eventos.agregarevento(concierto1);
//eliminar evento
console.log(eventos.eliminarEvento('4'));
//esta por terminar 
console.log(eventos.listarResumenesFormateados());




