class Incidencia{

    constructor({id,nombre,descripcion,estado,prioridad}){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.estado=estado;
    this.prioridad=prioridad;

    }

    mostrarInfo(){
        return `id: ${this.id},nombre :${this.nombre},descripción: ${this.descripcion},estado: ${this.estado},prioridad: ${this.prioridad}`;
    }

  
}

class Sistema{

    #pilaIncidencias

    constructor(){

        this.#pilaIncidencias=[];

    }

    anyadirIndidencia(incidencia){
        this.#pilaIncidencias.push(incidencia);
    }

    cambiarEstado(id){
       const indice = this.#pilaIncidencias.findIndex(item => item.id === id);
       if(indice===-1){
        return `El ${id} no existe`;
       }else{
        this.#pilaIncidencias[indice].estado="cancelado";
        return `El ${id} ha sido cambiado`;
       }
    
    }

    cambioEstadoIncidencia(id,est){
        const indice=this.#pilaIncidencias.findIndex(item => item.id === id);
        this.#pilaIncidencias[indice].estado=est;

    }

    incidenciasEstado(estado){
       const incidenciasEstado =this.#pilaIncidencias.filter(item => item.estado === estado)
        return incidenciasEstado;
        
    }
    incidenciasPrioridad(prioridad){
       const incidenciasPrioridad =this.#pilaIncidencias.filter(item => item.prioridad === prioridad)
        return incidenciasPrioridad;
        
    }
    cambioPrioridadIncidencia(prioridadActual,nuevaPrioridad){
        const incidenciasPrioridad=this.#pilaIncidencias.findIndex(item => item.prioridad === prioridadActual);
        this.#pilaIncidencias[incidenciasPrioridad].prioridadActual=nuevaPrioridad;
        return `cambiada prioridad de la ${prioridadActual} a la prioridad ${nuevaPrioridad}` ;
    }

    listarIncidencias(){
        return this.#pilaIncidencias.map(item =>item.mostrarInfo());
    }
}
//crear varias incidencias
  const in1 = new Incidencia({id:1,nombre:"Luis",descripcion:"no arranca",estado:"en proceso", prioridad:1});
  
  const in2 = new Incidencia({id:2,nombre:"Andres",descripcion:"no arranca",estado:"abierta", prioridad:2});
  
  const in3 = new Incidencia({id:3,nombre:"Alvaro",descripcion:"no arranca",estado:"en proceso", prioridad:3});
  
  const in4 = new Incidencia({id:4,nombre:"Alvaro",descripcion:"no lo se",estado:"abierta", prioridad:1});
  
  const in5 = new Incidencia({id:5,nombre:"Alvaro",descripcion:"no arranca",estado:"en proceso", prioridad:1});

  //mostrar informacion incidencia

  console.log(in1.mostrarInfo());

  //añadir al sistema
  s1= new Sistema();

  s1.anyadirIndidencia(in1);
  s1.anyadirIndidencia(in2);
  s1.anyadirIndidencia(in3);
  s1.anyadirIndidencia(in4);
  s1.anyadirIndidencia(in5);

  ///mostrar por consola inf de cada incidencia
  console.log(s1.listarIncidencias());


// - Cambiar el estado de alguna incidencia (directamente a cerrado)
 console.log(s1.cambiarEstado(3));
 console.log(s1.listarIncidencias());

// - Obtener listados de incidencias según su estado o prioridad

//segun su estado
console.log("///segun el estado**********************")
    console.log(s1.incidenciasEstado("en proceso"));
//segun prioridad
console.log("//según el estado***********************")
    console.log(s1.incidenciasPrioridad(1));
    //cambiar prioridad()
console.log("//cambiar prioridad incidencia de x a y ***********************")
    console.log(s1.cambioPrioridadIncidencia(1,3))
    console.log(s1.listarIncidencias());
