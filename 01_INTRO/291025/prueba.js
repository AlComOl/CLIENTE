
//para coger id
let nodo=document.getElementById("id");
console.log(nodo.innerHTML);
// para cofer clases , este metodo devuelve una coleccion por eso hay que poner 
let clasname=document.getElementsByClassName("clas");
console.log(clasname[0].innerHTML);

//Para coger etiquetas como p 
let tagname= document.getElementsByTagName("p");
console.log(tagname[1].innerHTML);
//recoge lo que tenga el atributo clas en este caso , devuelve un array por eso lo corchetes sino no va
let byname=document.getElementsByName("clas");
console.log(byname[0].innerHTML);

//devuelve lo que hay dentro del nodo (diciendole el nodo y la clase)
let qselec = document.querySelector('div.error');
console.log(qselec.innerHTML);

//devuelve todos los elementos que coincidan con el selector
let qselecall = document.querySelector('div.prueba p');
console.log(qselecall.innerHTML);


    // document.documentElement: devuelve el nodo del elemento <html>
    // document.head: devuelve el nodo del elemento <head>
    console.log(document.head);
    // document.body: devuelve el nodo del elemento <body>
    // document.title: devuelve el nodo del elemento <title>
    // document.link: devuelve una colección con todos los hiperenlaces del documento
    // document.anchor: devuelve una colección con todas las anclas del documento
    // document.forms: devuelve una colección con todos los formularios del documento
    // document.images: devuelve una colección con todas las imágenes del documento
    // document.scripts: devuelve una colección con todos los scripts del documento



    // EJERCICIO: Para hacer los ejercicios de este tema descárgate esta página de ejemplo y ábrela en tu navegador. Obtén por consola, al menos de 2 formas diferentes:

    //     El elemento con id ‘input2’
    //     La colección de párrafos
    //     Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
    //     El formulario (ojo, no la colección con el formulario sino sólo el formulario)
    //     Todos los inputs
    //     Sólo los inputs con nombre ‘sexo’
    //     Los items de lista de la clase ‘important’ (sólo los LI)

