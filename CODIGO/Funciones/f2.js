 const boton = document.getElementById("b")
 const valor = document.getElementById("n");
 const salida= document.getElementById("exit");
 const bo=document.getElementById("borrar");
  myarray=[];

function almacena(valor){
    let x= valor.value;
    myarray.push(x);   
}

boton.addEventListener("click",function(){

    almacena(valor);
    salida.textContent=myarray;
    console.log(myarray);
});

bo.addEventListener("click", function(){
    myarray=[];
    salida.textContent=myarray;
})



