
// ej01.js

//## MODIFICA DESDE AQUÍ

// =======================
// Clase Articulo
// =======================
class Articulo{
  id;
  nombre;
  precio;
  fechaEpochMs;

  constructor(id,nombre,precio){
    this.id=id;
    this.nombre= nombre;
    this.precio=precio;
    this.setFechaEpochMs();

  }
calcularPrecioFinal(){
 return this.precio=(this.precio+21)/100;
  

}
setFechaEpochMs(){

}

}

// =======================
// Clase ArticuloFisico
// =======================
class ArticuloFisico extends Articulo{
  pesoKg

  constructor(id,nombre,precio,pesoKg){
    super(id,nombre,precio);
    this.pesoKg=pesoKg;
    
  }

calcularPrecioFinal(){
  this.articulos.forEach(item=>item.precio+((precio+21)/100));

}

}


// =======================
// Clase Pedido
// =======================

class Pedido{

id;
nombreCliente;
articulos=[];
entregado;


agregarArticulos(nuevoarticulo){
  this.articulos.push(nuevoarticulo);
}

printArticulos(){
  return this.articulos.forEach(item =>console.log(item));

}
eliminarArticuloPorId(idArticulo){
  this.articulos.find(item=>{if(item.idArticulo==idArticulo){item.idArticulo.remove()}});

}
calcularTotal(){
 

}
ordenarArticulosPrioritarios(){

}
}

// =======================
// Clase TiendaOnline
// =======================


//## MODIFICA HASTA AQUÍ

class TiendaOnline{
pedidos;
  constructor(){
    this.pedidos=[];

  }

   addPedido(pedido){
    this.pedidos.push(pedido);

   }
   buscarPedidoPorId(id){
    this.pedidos.findIndex(item=>{if(item.id==id){console.log(item.id)}});
    

   }

   procesarPedido(id){
    return this.pedidos.forEach(item=>{if(item.id==id){item.id=true}});


   }
}



// ########################

// =======================
// Programa principal
// =======================
function main() {
  console.log("=== INICIO PROGRAMA TIENDA ONLINE ===");

  // Crear artículos
  const art1 = new Articulo(1, "Libro", 20);
  const art2 = new Articulo(2, "Curso Online", 50);
  const art3 = new ArticuloFisico(3, "Portátil", 800, 2.5);
  const art4 = new ArticuloFisico(4, "Monitor", 200, 4);

  // Crear pedido
  const pedido1 = new Pedido(1001, "Juan Pérez");
  pedido1.agregarArticulos([art1, art2, art3, art4]);

  const pedido2 = new Pedido(1003, "Pepita López");
  pedido2.agregarArticulos([art3, art4]);

  console.log("Artículos antes de ordenar:");
  pedido1.printArticulos();

  pedido1.ordenarArticulosPrioritarios();

  console.log("Artículos después de ordenar:");
  pedido1.printArticulos();

  // Eliminar un artículo
  pedido1.eliminarArticuloPorId(2);

  console.log("Artículos tras eliminar uno:");
  pedido1.printArticulos();

  // Crear tienda y añadir pedido
  const tienda = new TiendaOnline();
  tienda.addPedido(pedido1);
  tienda.addPedido(pedido2);

  // Procesar pedido
  const total = tienda.procesarPedido(1001);

  console.log("Pedido procesado. Total: " + total );
  console.log("Pedido entregado: " + pedido1.entregado);

  console.log("=== FIN PROGRAMA TIENDA ONLINE ===");

  //Busca pedido
  const auxId = 1003;
  const pedidoEncontrado = tienda.buscarPedidoPorId(1003);
  console.log("Encontrado pedido 1003: ")
    // pedidoEncontrado.printArticulos()
}

// Ejecutar programa principal
main();
