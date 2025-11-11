function codigoMorse(phrase){

     const morse = {
        "A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".","F": "..-.",
        "G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..",
        "M": "--","N": "-.","Ñ": "--.--","O": "---","P": ".--.","Q": "--.-",
        "R": ".-.","S": "...","T": "-","U": "..-","V": "...-","W": ".--",
        "X": "-..-","Y": "-.--","Z": "--..","0": "-----","1": ".----",
        "2": "..---","3": "...--","4": "....-","5": ".....","6": "-....",
        "7": "--...","8": "---..","9": "----."," ": "/"
    };


    // Detecta si es Morse (contiene . o -)
    if (phrase.includes('.') || phrase.includes('-')) {
        return aAbcdario(phrase,morse); // Morse a Texto, pasando el objeto
    } else {
        return aMorse(phrase.toUpperCase(),morse); // Inversa
    }
}



function aMorse(phrase,morse){
    
    let phraseArray = phrase.split(''); // convertimos string a array
    return phraseArray.map(letra => morse[letra] || '').join(' ');
}

function aAbcdario(phraseMorse,morse){
    // Invertimos objeto
    const morseToAlfabeto = {};
    for(let letra in morse){//invierto el objeto con for in
        morseToAlfabeto[morse[letra]] = letra;
    }

    const codes = phraseMorse.trim().split(' '); // separa cada código Morse
    const traduccion = codes.map(code => morseToAlfabeto[code] || ''); // traduce
    return traduccion.join('');
}

// Ejemplo de uso
let phrase = window.prompt("Introduce una frase o Morse:");
window.document.getElementById('resultado').innerHTML = codigoMorse(phrase);



// if(localStorage){
// window.document.getElementById('memoria').innerHTML=localStorage.setItem();
// }else{
// let phrase=window.prompt("Introduce una frase para traducirla");
// }
// window.document.getElementById('resultado').innerHTML=codigoMorse(phrase);


// localStorage.test=codigoMorse(phrase);



// window.document.getElementById('memoria').innerHTML=localStorage.setItem('texto morse', JSON.stringify(codigoMorse(phrase)));

 

// if(localStorage.test){

//  delete localStorage.test;

//   window.document.getElementById('resultado').innerHTML= localStorage.test;


// }else{


  
//   localStorage.test=codigoMorse(phrase);
 

 
// }



// alert(codigoMorse(phrase));
// let resultado=codigoMorse(phrase);




// codigoMorse(phrase);









