let a= document.getElementById("n1");
let o= document.getElementById("op");
let b= document.getElementById("n2");
let exit=document.getElementById("res");
let boton=document.getElementById("b");




function operacion(a,operador,b){

     let salida;
    switch (operador.value) {
        case "+":
            salida=(Number(a.value) + Number(b.value));
            break;
        case "-":
              salida=Number(a.value) - Number(b.value);
            break;  
        case "*":
              salida=Number(a.value) * Number(b.value);
            break;
        case "/":
              salida=Number(a.value) / Number(b.value);
            break;              
        default:
            salida="El operador no es correcto";
            break;
    }

    return salida
}



boton.addEventListener("click",function(){
    let resultado=operacion(a,o,b);
    exit.textContent= resultado;
});





