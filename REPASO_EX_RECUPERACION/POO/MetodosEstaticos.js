class Pokemon{
    static contador=0;
    constructor(nombre,color){
        this.nombre=nombre;
        this.color=color;
        Pokemon.contador++;
       
    }

    static cont(contador){
        
        return Pokemon.contador;
    }
}

const Picachu= new Pokemon('Samule','verde');
console.log(Pokemon.cont());
const cacharro= new Pokemon('chato','azul');
console.log(Pokemon.cont());
const Pitufo= new Pokemon('rigar','gris');


