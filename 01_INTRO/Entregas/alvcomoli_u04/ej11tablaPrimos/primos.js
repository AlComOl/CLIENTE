function primos(numero){        
    let primo=[];
    let flag=true;

    
    let n=parseInt(numero);

        if(isNaN(n)){
            return "Intorduce un número valido"
          }
    
    if(n>2){
        for (let i = 2; i < n; i++) { 

                flag=true;

            for(let z = 2; z < i ; z++){ 

                    if(i%z===0){
                        flag=false;
                    }
            }
            if(flag){
               primo.push(i);
                
            }
        }
    }else{
        return "el numero tiene que ser mayor de 1"
    }

    return primo;
}


let entrada=prompt("Introduce numero hasta el cual quieres verificar si los anteriores son primos");

let salida=document.getElementById('salida');

let res=primos(entrada);

salida.innerHTML=res;


    





    

