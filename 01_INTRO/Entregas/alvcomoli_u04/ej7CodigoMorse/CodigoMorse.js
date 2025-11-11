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

    const codigo = phraseMorse.trim().split(' '); // separa cada código Morse
    const traduccion = codes.map(codigo => morseToAlfabeto[codigo] || ''); // traduce
    return traduccion.join('');
}


let anterior = localStorage.getItem('ultimaTraduccion');
document.getElementById('memoria').innerHTML = anterior ? anterior : 'No hay datos guardados';

// ✅ Pedir nueva frase
let phrase = window.prompt("Introduce una frase o Morse:");

// ✅ Si el usuario escribió algo
if (phrase && phrase.trim() !== "") {
    let resultado = codigoMorse(phrase);

    // Mostrar la traducción
    document.getElementById('resultado').innerHTML = resultado;

    // Guardar en localStorage
    localStorage.setItem('ultimaTraduccion', resultado);

    // Mostrar memoria actualizada
    document.getElementById('memoria').innerHTML = resultado;
}











