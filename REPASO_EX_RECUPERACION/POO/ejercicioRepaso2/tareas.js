class Tarea{

    constructor({id:id,titulo:titulo,prioridad:prioridad,completada:completada}){
        this.id=id;
        this.tutulo=titulo;
        this.prioridad=prioridad;
        this.completada=completada;

    }

    descripcion(){
        return `Tarea: ${this.id}  Prioridad: ${this.prioridad}  Completada: ${this.completada}`
    }
}

class GestorTareas{

    #tareas

    constructor(){
        this.#tareas=[]; 
    }

    agregarTarea(tarea){
        this.#tareas.push(tarea);
    }

    marcarCompletada(id){
        const pos=this.#tareas.findIndex(item => item.id===id);
         this.#tareas[pos].completada=true;
    }

    filtrarPorPrioridad(){
        const prioridad=this.#tareas.filter(item => item.prioridad==="baja");
        return prioridad;
    }

    listarTareas(){
        return this.#tareas.map(item => item.descripcion());
    }
}

t1= new Tarea({ id: 101, titulo: "Estudiar JS", prioridad: "baja", completada: false });
t2= new Tarea({ id: 102, titulo: "Estudiar PHP", prioridad: "alta", completada: true});
t3= new Tarea({ id: 103, titulo: "Estudiar TYPESCRIP", prioridad: "baja", completada: true });
t4= new Tarea({ id: 104, titulo: "Estudiar ANGULAR", prioridad: "media", completada: false });

gestor1=new GestorTareas();

gestor1.agregarTarea(t1);
gestor1.agregarTarea(t2);
gestor1.agregarTarea(t3);
gestor1.agregarTarea(t4);


console.log(t1.descripcion());

console.log(gestor1.marcarCompletada(101));

console.log(gestor1.filtrarPorPrioridad('baja'));

console.log(gestor1.listarTareas());


