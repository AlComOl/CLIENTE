class Libro{



constructor(titulo,autor,genero,paginas){

    this.titulo= titulo;
    this.autor=autor;
    this.genero= "novela","ensayo","ciencia";
    this.paginas= this.paginas;



}

    

    info(){

        return `El tutulo del libro es ${this.titulo} ,el autor ${this.autor}, el genero ${this.genero}, las paginas ${this.paginas}`;
    }


}

class ClubLectura{

constructor(libro){

   this.biblioteca[];
   libro=this.libro;
}


  agregarLibro(libro){
   biblioteca.push(libro);
     }

  eliminarLibro(libro){
    this.biblioteca.array.forEach(element => {
        element=this.libro 
        this.biblioteca.remove(element);
    });

    

     }

  listar(){
    return this.biblioteca.info();

     }
 filtrarporgenero(){
    filter_genero=this.biblioteca.filter(genero);
    return filter_genero;

 }

info(biblioteca){
    this.biblioteca.map(libros => libros.info());
}

}

   





const Libro1 = new Libro('pepe','autor','novela',100);

console.log(Libro1.info());