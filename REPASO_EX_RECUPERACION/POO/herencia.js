// //FORMA ANTIGUA
//     //Funciones constuctoras(solo propiedades)
//     function Motocileta(nombre, cc){
//      this.nombre=nombre;
//         this.cc=cc;
//     }
//     const motocicleta1=new Motocileta('Suzuki',1200);
//     console.log(motocicleta1); //al no tener metodos y  la instancia imprime el valor de los propiedades

//     //funciones constructoras con prototipos un poco arcaico(funcion constructora+prototipos)

//     function Comunidad(presidente, conserge){
//         this.presidente=presidente;
//         this.conserge=conserge;
//     }

//     Comunidad.prototype.info=function(){
//         return `Mi nombre es ${this.presidente} son el presidente y ${this.consege} es el consege`;
//     }
//     comunidad1=new Comunidad('Miguel','jorge');

//     console.log(comunidad1.info()); 

//FORMA NUEVA
//CREACION DE CLASE CON MÉTODOS
    
    //Sintaxis de clase

    class Colegio{
        constructor(nombre,distrito){
            this.nombre=nombre;
            this.distrito=distrito;
        }

        info(){
            return `El nombre del instituto es ${this.nombre} y el distrito ${this.distrito}`;
        }
    }

    const cole=new Colegio('Maristas',49569);
    console.log(cole.info());

    //Sintaxis de clase sin metodos

    class Ciclomotor{
        constructor(marca, cc){
            this.marca=marca;
            this.cc=cc;
        }
    }
    const ciclomotor1 = new Ciclomotor('vespino', 49);
    console.log(ciclomotor1);


    ///HERENCIA

    // FUNCIONES CONSTRUCTORAS
    // metodo anterior a ES6

    // function Bloque(presidente,conserge,numero){
    //     Comunidad.call(this,presidente,conserge);//es como el super 
    //     this.numero=numero;//cogemos el atributo que no tiene el super
    // }
    // Bloque.prototype= Object.create(Comunidad.prototype);//hereda los metodos de la comunidad
    // Bloque.prototype.constructor=Bloque;

    // const bloque1=new Bloque('Pepito','Jorge',4);
    // console.log(bloque1);

    //en ES6 mas facil 

    class Comunidad{
        static presidente='Juna';
        consege='joan';
        constructor(presidente,conserge){
            this.presidente=presidente;
            this.conserge=conserge;
        } 

        get verPresi(){
         return this.presidente;
        }
        set cambiarPresi(presi){
            this.presidente=presi;
        }
    }
    

    class Bloque extends Comunidad{
        constructor({presidente,conserge,numero}){
            super(presidente,conserge);
            this.numero=numero;
        }
    }
     const bloque2 = new Bloque({conserge:'Manuel',presidente:'Jose',numero:46234});

    //  bloque2.cambiarPresi='Luis';
    //  console.log(bloque2.verPresi);
    console.log(Comunidad.presidente);
     
  
     



