//(Voluntaria) Anagrama

// Escribe una función que reciba dos palabras (string) y retorne verdadero o falso (boolean) según sean o no anagramas.

//     Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
//     NO hace falta comprobar que ambas palabras existan.

//     Dos palabras exactamente iguales no son anagrama.
//     Los datos deben ser recogido a través de window.prompt().
//     El resultado debe ser mostrado a través de window.alert().


function anagrama(palabra1,palabra2){

    if(palabra1===palabra2){
      return  "Las palabras son iguales";
    }else{

       newP1Array = (palabra1.split("")).sort();//split conviete a array,separa las letras y  sort ordena 
       newP2Array = (palabra2.split("")).sort();
       let anagrama = newP1Array.every((elementP1,i) => elementP1 === newP2Array[i]); //Compara letras de los arrys pasando un callback con every()



       if(anagrama){
        return "Es un anagrama";
       }else{
        return  "NO es un anagrama";
       }
    }
}

let palabra1 = window.prompt("Introduce la primera palabra:");
let palabra2 = window.prompt("Introduce la segunda palabra:");


alert (anagrama(palabra1,palabra2));


