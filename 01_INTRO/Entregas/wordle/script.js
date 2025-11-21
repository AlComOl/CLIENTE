let salidaGanador = document.querySelector('.result')
let palabra= "index";
let palabraArray=palabra.toUpperCase().split('');


let filaActual=document.querySelector('.row');

palabraArray.forEach((item,index) => {//item representa los elementos del array 
    if(index===0){
        filaActual.innerHTML += `<input type="text" maxlength="1" class="cuadrado focus"></input>`
    }else{
        filaActual.innerHTML += `<input type="text" maxlength="1" class="cuadrado"></input>`
    }
    });
let elementoFocus = document.querySelector('.focus');
elementoFocus.focus();//Al recargar la pagina el cursor estara en el 1 recuadro


let cuadrados=document.querySelectorAll('.cuadrado');
cuadrados=[...cuadrados];//convierte array el nodeList asi tengo mas funciones para utilizar (foreach etc..)

let entradaUsuario=[];

cuadrados.forEach(element=>{
    element.addEventListener('input',event=>{
        entradaUsuario.push(event.target.value.toUpperCase());
        console.log(entradaUsuario);//recojo el array las letras del wordle
       if(event.target.nextElementSibling){ // envento->target->nextElementSibling(hace señale sig input(cuadrado))Si existe next
            event.target.nextElementSibling.focus()//focus ,pasa al siguinete
       }else{
            //comparamos los arrays para cambiar estilos(verde, amarillo,gris)
            let indicesCorrectos = compararPalabras(palabraArray,entradaUsuario)
            indicesCorrectos.forEach(element =>{
                cuadrados[element].classList.add('green');//cada elemento del array cuadrados le añade la clase green
            });
            //estilos si acertamos todas las letras
            if(indicesCorrectos.length == palabraArray.length){
                salidaGanador.innerHTML=`<h1 style='color:red'>GANASTE</h1>
                <button class="boton">Reiniciar</button>`
            }

            //boton reiniciar
            // let reiniciarBtn= document.querySelector('.boton');
            //     reiniciarBtn.addEventListener('click',()=>{
            //         location.reload();
            //     });
        
            //si existe la letra pero no estan en la posicion correcta
            let letrasexistenentes= existenLetras(palabraArray,entradaUsuario);
            letrasexistenentes.forEach(elemento=>{
                cuadrados[elemento].classList.add('gold');
            })
            console.log(letrasexistenentes);
            


            //añadimos nuevas lineas
       
      
        }
        
    });
})

//boton reiniciar
            // let reiniciarBtn= document.querySelector('.boton');
            //     reiniciarBtn.addEventListener('click',()=>{
            //         location.reload();
            //     });


///FUNCIONES///

function compararPalabras(array1,array2){
    indicesIguales=[];
    array1.forEach((element,index)=>{
        if(element == array2[index]){
            console.log("La posicion ${index} SON iguales")
            indicesIguales.push(index);
        }else{
            console.log("La posicion ${index} NO son iguales") 
        }
    });

return indicesIguales;
}


//si existen las palabras pero no en el lugar adecuando

function existenLetras(array1,array2){
 let pExistentesArray=[];
    array2.forEach((element,index)=>{
        if(array1.includes(element)){
           pExistentesArray.push(index);
        }
    });
    return pExistentesArray;

}

