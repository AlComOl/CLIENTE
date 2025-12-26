class Pedido{

    constructor({numero,cliente,estado,importe}){
        this.numero=numero;
        this.cliente=cliente;
        this.estado=estado;
        this.importe=importe;

    }   

    resumen(){
        return `Número pedido: ${this.numero} Cliente: ${this.cliente} el estado del pedido ${this.estado}`; 
    }
    
}

class GestorPedidos{

     #pedidos;

     constructor(){
        this.#pedidos=[];
     }

     agregarPedido(ped){
        this.#pedidos.push(ped);

     }

     cancelarPedido(numero){
       const elemento =this.#pedidos.findIndex(item => item.numero === numero)
       this.#pedidos[elemento].estado= "cancelado";
      
     }  

     filtrarPorEstado(e){
        return this.#pedidos.filter(item=>item.estado==e);

     }

     listarPedidos(){
       return this.#pedidos.map(item => item.resumen());
     }
}

const ped1=new Pedido({numero:934534,cliente:"Jose Luis",estado:"pendiente"});
const ped2=new Pedido({numero:933434,cliente:"Vicente",estado:"enviado"});
const ped3=new Pedido({numero:933435,cliente:"Luis",estado:"cancelado"});
const ped4=new Pedido({numero:933436,cliente:"Andres",estado:"cancelado"});
const ped5=new Pedido({numero:933437,cliente:"Juaquin",estado:"pendiente"});

console.log(ped1.resumen());

gest1=new GestorPedidos();

gest1.agregarPedido(ped1);
gest1.agregarPedido(ped2);
gest1.agregarPedido(ped3);
gest1.agregarPedido(ped4);
gest1.agregarPedido(ped5);


console.log(gest1.listarPedidos());

gest1.cancelarPedido(934534);

console.log(gest1.listarPedidos());

console.log(filtrarPorEstado("cancelado"));







