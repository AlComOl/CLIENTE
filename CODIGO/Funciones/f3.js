const bot=document.getElementById("bx");
let borrar=document.getElementById("br");
let n1=Number(document.getElementById("a").value);
let n2=Number(document.getElementById("b").value);
let exit=document.getElementById("e");



function guardarPares(a=n1,b=n2){
  
    myArray=[];
    for (let i = a; i < b; i++) {
        if(i%2==0){
        myArray.push(i);
       }
    }
      exit.innerText=myArray;    
    }
    

    bot.addEventListener("click", function(){ 
        guardarPares(n1,n2);

    });


    borrar.addEventListener("click", function(){
        console.log("hola");
        myArray=[];
        exit.innerText=myArray; 
    });