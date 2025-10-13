//"use strict";
//https://marcosruiz.github.io/posts/arrays-javascript/

let a=[1,2,7,4,"a",6,]


  console.log("hola");

for(let i of a){
   console.log(i);
}

a.forEach(i=>console.log(i));

//es una llamada a otra funcion que pasas por argumento y luego se invoca o no dentro de la funcion externa para ocmpletar algun tipo de rutina o accion
//siempre que pases una funcion argumento sin que se ejeute sera un callback


let res = [1,2,3].map((elem) => { return "hola"+ elem;})

console.log(res);


///APUNTES////////////////////////////////////

//definir un array

let b=[];

b[0]=1;
b[1]="a";

console.log(b);

//acceder al ultimo elemento

let ultimoElem=b.at(-1);
console.log(ultimoElem);

let ultimiElem1=b.length;


console.log("******************************************");
let c = [1,2,3,4];

// Acceder al último elemento:
//console.log(c.at(-1));


console.log("********Métodos y propiedades de los arrays********");




(() => {let flecha=[1,2,3];

    console.log(c.length);
    c.sort();
    c.push(4);
    c.pop();
    
})();

function anonima(){
    let fle=[6,7,8];
    
}







(() => {
    let flecha = [1,2,3];

    console.log(c.length); // 3
    c.sort();
    c.push(4);
    c.pop();
})();




