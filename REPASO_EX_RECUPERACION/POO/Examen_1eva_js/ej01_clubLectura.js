class Libro{
    constructor({titulo,autor,genero,paginas}){

        this.titulo=titulo;
        this.autor=autor; 
        this.genero=genero;
        this.paginas=paginas;

    }

    info(){
        return `titulo: ${this.titulo}, autor: ${this.autor}, genero:${this.genero}, paginas: ${this.paginas}`;
    }

}


class ClubLectura{

  #biblioteca;

    constructor(){

        this.#biblioteca=[];
    }
        agregarlibro(libro){
            this.#biblioteca.push(libro);
        }


        eliminarlibro(titulo){
           let index =this.#biblioteca.findIndex(item=>item.titulo == titulo);
           this.#biblioteca.splice(index,1)
            console.log(this.#biblioteca[index]);
        }


        filtrarPorGenero(genero){
            let g=this.#biblioteca.filter(libro=>libro.genero == genero);
            console.log(g);
        }

        listar(){
          return  this.#biblioteca.forEach(((libro ,index)=>{ 
                console.log(`${index}_${libro.titulo}, ${libro.autor}, ${libro.genero}, ${libro.paginas}`)}));
        }
        info(){

        }
    }

libro1=new Libro({titulo:"1984",autor:"Orwell",genero:"novela",paginas:300});
libro2=new Libro({titulo:"Donde tus sueños te lleven",autor:"Iñaki iriondo",genero:"novela",paginas:300});
libro3=new Libro({titulo:"El camino del despertar",autor:"Mario Alonso Puig",genero:"desarrollo Personal",paginas:200});
libro4=new Libro({titulo:"Philadelphia",autor:"Andres Medina",genero:"Biografias",paginas:100});

// console.log(libro1.info());
// console.log(libro2.info());

clubIntrepidos= new ClubLectura();

clubIntrepidos.agregarlibro(libro1);
clubIntrepidos.agregarlibro(libro2);
clubIntrepidos.agregarlibro(libro3);
clubIntrepidos.agregarlibro(libro4);


console.log(clubIntrepidos.listar());

// clubIntrepidos.eliminarlibro("El camino del despertar");

// console.log(clubIntrepidos.listar());

console.log(clubIntrepidos.filtrarPorGenero('novela'));
