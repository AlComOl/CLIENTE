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
            console.log(index);

            
        }


        filtrarLibro(){

        }
        listar(){
          return  this.#biblioteca.forEach(((libro ,index)=>{ 
                console.log(`${index}_${libro.titulo}, ${libro.autor}, ${libro.genero}, ${libro.paginas}`)}));
        }
        info(){

        }
    }

libro1=new Libro({titulo:"1984",autor:"Orwell",genero:"novela",paginas:300});
libro2=new Libro({titulo:"Donde tus sueños te lleven",autor:"Iñaki iriondo",genero:"desarrollo Personal",paginas:600});

// console.log(libro1.info());
// console.log(libro2.info());

clubIntrepidos= new ClubLectura();

clubIntrepidos.agregarlibro(libro1);
clubIntrepidos.agregarlibro(libro2);

// console.log(clubIntrepidos.listar());

clubIntrepidos.eliminarlibro("Donde tus sueños te lleven");

// console.log(clubIntrepidos.listar());
