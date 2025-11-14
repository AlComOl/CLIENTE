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
    return phraseArray.map(letra => morse[letra] || '').join(' ');//Crea un nuevo array en el que cada elemento es el código Morse correspondiente a cada letra del array phraseArray y luego los une en una cadena separada por espacios.
}

function aAbcdario(phraseMorse,morse){
    // Invertimos objeto
    const morseToAlfabeto = {};
    for(let letra in morse){//invierto el objeto con for in
        morseToAlfabeto[morse[letra]] = letra;
    }

    const codigo = phraseMorse.trim().split(' '); // divide cadena usando espacio como separador , trim quita espacios(prin,fin)
    const traduccion = codigo.map(letra => morseToAlfabeto[letra] || ''); //crea un nuevo array en el que cada elemento (letra) es la letra correspondiente al código Morse del array codigo.
    return traduccion.join('');
}


let anterior = localStorage.getItem('ultimaTraduccion');
document.getElementById('memoria').innerHTML = anterior ? anterior : 'No hay datos guardados';


let phrase = window.prompt("Introduce una frase o Morse:");

//  Si escribo algo
if (phrase) {

    let resultado = codigoMorse(phrase);

    
    document.getElementById('resultado').innerHTML = resultado;// Mostrar la traducción

   
    localStorage.setItem('ultimaTraduccion', resultado); // Guardar en localStorage co setItem

   
    document.getElementById('memoria').innerHTML = resultado; // Mostrar memoria actualizada
}





