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
        this.banda=this.banda;
    }

esGrande(aforoMaximo){
    const aforo= aforoMaximo>10000?false:true;
    return aforo;
     
}

}
class Taller extends Evento{

    constructor({codigo,nombre,fecha,aforoMaximo,duracionHoras}){
        super(codigo,nombre,fecha,aforoMaximo);
        this.duracionHoras=duracionHoras;
    }

    calcularCosto(tarifaFija){
        return this.duracionHoras*tarifaFija;

    }

}
class Calculadora{

    static calcularDiasrestantes(fechaEvento){
        const dateEvent = Date.now(fechaEvento).getTime();
        const dateHoy=new Date().getTime();

        return dateEvent-dateHoy;

    }

    static formatearAforo(aforo){

    }
    
}


//clase Base 

// const eventoLunes=new Evento({nombre:'Singers_Play',codigo:'456789',fecha:'2025-08-10',aforoMaximo:5000});

// console.log(eventoLunes.resumen());

//Concierto o Taller

const concierto1= new Concierto({nombre:'Singers_Play',codigo:'456789',fecha:'2025-08-10',aforoMaximo:5000,banda:'U2'});

console.log(concierto1.esGrande(20000));

const taller1= new Taller({nombre:'Singers_Play',codigo:'456789',fecha:'2025-08-10',aforoMaximo:5000,duracionHoras:5});

console.log(taller1.calcularCosto(10));


