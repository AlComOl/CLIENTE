
function codigoMorse(phrase){

    let phraseArray=phrase.toUpperCase().split('');// sin uppercase no funciona
  
    for (let i = 0; i < phraseArray.length; i++) {
      //si la letra es de a =>z / o 0 => 9  / \ o /
      if ((phraseArray[i].toLowerCase() >= 'a' && phraseArray[i].toLowerCase() <= 'z') ||
          (phraseArray[i] >= '0' && phraseArray[i] <= '9') || ( phraseArray[i] === '\'' || phraseArray[i]==='/') ){

            return aMorse(phraseArray);

          }else if(phraseArray[i]==='.'|| phraseArray[i]==='_'){

            

            return aEspañol(phraseArray.join(''));//hay que convertir a cadena con el join();
        }
        
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


function aEspañol(phraseMorse) {
  // Objeto Morse: clave = letra, valor = código Morse
  const morse = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "CH": "---",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "Ñ": "--.--",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "\"": ".-..-.",
    "/": "-..-."
  };

  //necesito invertir el objeto
  const morseToAlfabeto = {};
  for (let letra in morse) {
    morseToAlfabeto[morse[letra]] = letra; //ej morse letra es .... letra es A
  }


  const codes = phraseMorse.split(' '); //pongo sepacion

  
  const traduccion = codes.map(code => morseToAlfabeto[code]);//cada codigo lo convierto en el correspondiente del alf morse

  
  return traduccion.join('');// convierto a string
}



 

if(localStorage.test){
 delete localStorage.test;
  window.document.getElementById('resultado').innerHTML= localStorage.test;


}else{
 let phrase=window.prompt("Introduce una frase para traducirla");
  window.document.getElementById('resultado').innerHTML=codigoMorse(phrase);
  localStorage.test=codigoMorse(phrase);
 

 
}



// alert(codigoMorse(phrase));
// let resultado=codigoMorse(phrase);




// codigoMorse(phrase);









