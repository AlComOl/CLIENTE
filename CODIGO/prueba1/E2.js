

let a = document.getElementById("Alojamiento");
let b= document.getElementById("Alimentacion");
let c= document.getElementById("Entretenimiento");
let boton=document.getElementById("boton");
let salida=document.getElementById("resultado");

let total=Number(a.value)+Number(b.value)+Number(c.value);


boton.addEventListener("click", function(){
   

    salida.textContent="La suma es "+ total;
})



