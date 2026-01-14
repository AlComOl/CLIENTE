class tarea{

    constructor({i:id,t:titulo,r:responsable,e:estado,p:prioridad}){
        this.id=id;
        this.titulo=titulo;
        this.responsable =responsable;
        this.estado =estado;
        this.prioridad =prioridad;
    }

    info(){
        return `La Tarea tiene un id ${this.id} Titulo: ${this.titulo} el responsable ${this.responsable} el estado es ${this.estado} prioridad ${this.prioridad}`;
    }
}
class sistema{     
    constructor(){
        this.gestorTareas =[];    
    }
    anyadirTarea(tarea){
      
        this.gestorTareas.push(tarea);
    }

    mostrar(){
        this.gestorTareas.forEach(item => console.log(item.info()));//recorre
    }

    cambiarEstadoTarea(id,estado){
        this.gestorTareas.forEach(item =>{if(item.id==id){item.estado=estado}});//recorre y modifica
        
    }

    listadoEstado(estado){
        this.gestorTareas.forEach(item => {if(item.estado==estado){console.log(item.info())}})//recorre
    }

    listadoPrioridad(prioridad){
        this.gestorTareas.forEach(item => {if(item.prioridad==prioridad){console.log(item.info())}});//recorre
    }


}
const t1= new tarea({i:2,t:'login',r:'Alvaro',e:'en curso',p:'alta'});
const t2= new tarea({i:3,t:'fotter',r:'Juan',e:'realizada',p:'baja'});
const t3= new tarea({i:4,t:'main',r:'Alfredo',e:'en progreso',p:'baja'});
s1=new sistema();
s1.anyadirTarea(t1);
s1.anyadirTarea(t2);
s1.anyadirTarea(t3);
s1.cambiarEstadoTarea(4,'realizado');
// s1.mostrar();
// s1.listadoEstado('realizada');
s1.listadoPrioridad('alta');
