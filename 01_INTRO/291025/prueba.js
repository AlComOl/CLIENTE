
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



