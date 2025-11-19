//paso 1 
class AlmacenTema {
  static instancia;

  constructor() {
    if (AlmacenTema.instancia) {
      return AlmacenTema.instancia;
    }

    this.estado = { tema: 'claro' }; 
    this.subscriptores = [];

    AlmacenTema.instancia = this;
  }

  suscribir(subscriptor) {
    this.subscriptores.push(subscriptor);
  }

  notificar() {
    this.subscriptores.forEach(sub => sub.actualizar(this.estado));
  }

  alternarTema() {
    this.estado.tema = this.estado.tema === 'claro' ? 'oscuro' : 'claro';
    this.notificar();
  }
}

//paso 2 

class Subscriptor {
  constructor(nodo) {
    this.nodo = nodo;
  }

  actualizar(estado) {
    if (estado.tema === 'claro') {
      this.nodo.classList.add('claro');
      this.nodo.classList.remove('oscuro');
    } else {
      this.nodo.classList.add('oscuro');
      this.nodo.classList.remove('claro');
    }
  }
}
//paso 3 
const almacen = new AlmacenTema(); // instancia única

// Nodos del DOM
const cuerpo = document.body;
const encabezado = document.querySelector('#mainHeader');
const boton = document.querySelector('#toggleThemeBtn');
const contenedor = document.querySelector('.container');
const cajas = document.querySelectorAll('.box');

// Crear subscriptors
const cuerpoSub = new Subscriptor(cuerpo);
const encabezadoSub = new Subscriptor(encabezado);
const botonSub = new Subscriptor(boton);
const contenedorSub = new Subscriptor(contenedor);

// Registrar todos los subscriptors
almacen.suscribir(cuerpoSub);
almacen.suscribir(encabezadoSub);
almacen.suscribir(botonSub);
almacen.suscribir(contenedorSub);
cajas.forEach(caja => almacen.suscribir(new Subscriptor(caja)));
//paso 4 
boton.addEventListener('click', () => {
  almacen.alternarTema();
});
//paso 5 almacen.notificar();
almacen.notificar();


