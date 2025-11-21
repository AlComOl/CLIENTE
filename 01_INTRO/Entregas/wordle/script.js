let salidaGanador = document.querySelector('.result')
let palabra= "index";
let palabraArray=palabra.toUpperCase().split('');
let filaId=1;
let mainContainer=document.querySelector('.main-container');

let filaActual=document.querySelector('.row');

    dibujarCuadros(filaActual);
    escucharEntradas(filaActual);
    agregarFocus(filaActual);

  



let elementoFocus = document.querySelector('.focus');
elementoFocus.focus();//Al recargar la pagina el cursor estara en el 1 recuadro

function escucharEntradas(filaActual){
    let cuadrados=filaActual.querySelectorAll('.cuadrado');
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

                muestraResultado('GANASTE');

                 let reiniciarBtn= document.querySelector('.boton');
                 reiniciarBtn.addEventListener('click',()=>{
                 location.reload();
              });

               return;

            }


            //si existe la letra pero no estan en la posicion correcta
            let letrasexistenentes= existenLetras(palabraArray,entradaUsuario);
            letrasexistenentes.forEach(elemento=>{
                cuadrados[elemento].classList.add('gold');
            });
            //crear una nueva fila
            let filaActual = crearFila();
            dibujarCuadros(filaActual);
            escucharEntradas(filaActual);
            agregarFocus(filaActual);
       
           

            


            //añadimos nuevas lineas
       
      
        }
        
    });
})
}






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

//crear una nueva fila

function crearFila(){
    filaId++;
    if(filaId<=5){
        let nuevaFila=document.createElement('div');
        nuevaFila.classList.add('row');
        nuevaFila.setAttribute('id',filaId);
        mainContainer.appendChild(nuevaFila);
        return nuevaFila;
    }
}

//dibujar cuadros 

function dibujarCuadros(filaActual){
    palabraArray.forEach((item,index) => {//item representa los elementos del array 
    if(index===0){
        filaActual.innerHTML += `<input type="text" maxlength="1" class="cuadrado focus"></input>`
    }else{
        filaActual.innerHTML += `<input type="text" maxlength="1" class="cuadrado"></input>`
    }
    });
}

//Pone el focus en la letra que vas a escribir

function agregarFocus(filaActual){
    let elementoFocus = filaActual.querySelector('.focus');
    console.log(elementoFocus);
    elementoFocus.focus();//Al recargar la pagina el cursor estara en el 1 recuadro

}

function muestraResultado(mensajeTexto){
     salidaGanador.innerHTML=`<h1 style='color:red'>${mensajeTexto}</h1>
                <button class="boton">Reiniciar</button>`
}