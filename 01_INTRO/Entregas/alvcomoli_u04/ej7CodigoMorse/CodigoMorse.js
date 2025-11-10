
function codigoMorse(phrase){

    let phraseArray=phrase.toUpperCase().split('');// sin uppercase no funciona
    let morse=0;
    let abcedario=0;  
    for (let i = 0; i < phraseArray.length; i++) {

        // let element = phraseArray[i];
        // element ==='.'|| element==='-' ? morse++ : abcedario++; //contador

        // if(phraseArray[i] === '.' || phraseArray[i] === '-') {//cambiar
        //     morse++;
        // } else {
        //     abcedario++;
        // }

     
      if ((phraseArray[i].toLowerCase() >= 'a' && phraseArray[i].toLowerCase() <= 'z') ||
          (phraseArray[i] >= '0' && phraseArray[i] <= '9') || ( phraseArray[i] === '\'' || phraseArray[i]==='/') ){

            return aMorse(phraseArray);

          }else if(phraseArray[i]==='.'|| phraseArray[i]==='_'){

            return aEspañol(phraseArray);
        }
        
    }
//identifica si es morse o letras
    if(abcedario>(phraseArray.length/2)+1){ //mitad+1 de caracteres son morse 

      return aMorse(phraseArray);

        

    }else if(morse>(phraseArray.length/2)+1){

       return aEspañol(phraseArray);
    }

}

function aMorse(phraseArray){

  const morse = {
  "A": "·—",
  "B": "—···",
  "C": "——·—·",
  "CH": "———",
  "D": "—··",
  "E": "·",
  "F": "··—·",
  "G": "——·",
  "H": "····",
  "I": "··",
  "J": "·———",
  "K": "—·—",
  "L": "·—··",
  "M": "——",
  "N": "—·",
  "Ñ": "——·——",
  "O": "———",
  "P": "·——·",
  "Q": "——·—",
  "R": "·—·",
  "S": "···",
  "T": "—",
  "U": "··—",
  "V": "···—",
  "W": "·——",
  "X": "—··—",
  "Y": "—·——",
  "Z": "——··",
  "0": "—————",
  "1": "·————",
  "2": "··———",
  "3": "···——",
  "4": "····—",
  "5": "·····",
  "6": "—····",
  "7": "——···",
  "8": "———··",
  "9": "————·",
  ".": "·—·—·—",
  ",": "——··——",
  "?": "··——··",
  "\"": "·—··—·",
  "/": "—··—·"
}





   let newCodeCaracter=phraseArray.map((letra) => morse[letra]); //letra igual que letra array morse(modifica la letra)

  return ((newCodeCaracter).join(" "));// a cadena 


}


function aEspañol(phraseArray){


const morse = {
  "A": "·—",
  "B": "—···",
  "C": "——·—·",
  "CH": "———",
  "D": "—··",
  "E": "·",
  "F": "··—·",
  "G": "——·",
  "H": "····",
  "I": "··",
  "J": "·———",
  "K": "—·—",
  "L": "·—··",
  "M": "——",
  "N": "—·",
  "Ñ": "——·——",
  "O": "———",
  "P": "·——·",
  "Q": "——·—",
  "R": "·—·",
  "S": "···",
  "T": "—",
  "U": "··—",
  "V": "···—",
  "W": "·——",
  "X": "—··—",
  "Y": "—·——",
  "Z": "——··",
  "0": "—————",
  "1": "·————",
  "2": "··———",
  "3": "···——",
  "4": "····—",
  "5": "·····",
  "6": "—····",
  "7": "——···",
  "8": "———··",
  "9": "————·",
  ".": "·—·—·—",
  ",": "——··——",
  "?": "··——··",
  "\"": "·—··—·",
  "/": "—··—·"
}

let arrayMorse=Object.entries(morse);

let reverse=arrayMorse.map((letra)=>)

// console.log(arrayMorse);



// let newphrase=phraseArray.entries();

// newphrase.map

//  console.log(newphrase); 

//  return arrayMorse;

// }



let phrase=window.prompt("Introduce una frase para traducirla");

// alert(codigoMorse(phrase));
// let resultado=codigoMorse(phrase);


window.document.getElementById('resultado').innerHTML=codigoMorse(phrase);




