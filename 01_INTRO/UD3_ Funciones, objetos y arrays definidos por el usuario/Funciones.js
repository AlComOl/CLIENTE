//Parametros

// function showMessage(from, text) { // parámetros: from, text
//   console.log(from + ': ' + text);
// }

// showMessage('Alvaro',"¡Como estas?");




function showMessage(from, text) {

  from = '*' + from + '*'; // hace que "from" se vea mejor

  console.log(( from + ': ' + text ));

  return from 
}
let from = "Ann";



console.log(showMessage(from, "Hola")); 
console.log(from);

//Valores predeterminados

function showMessage1(from, text="sin texto"){
    console.log(from+":"+text);
}

showMessage1("Ann");


function anotherFunction(){

return "Me ejecuto porque no se pasa parametro en Text";
;
}

from='Jose'

function showMessage2(from, text = anotherFunction) {
  // anotherFunction() solo se ejecuta si text no fue asignado
  // su resultado se convierte en el valor de texto
  console.log(from);
  return anotherFunction();
}

console.log(showMessage2(from));


function message(from,text="sintexto"){
    console.log(from,text);
}


console.log(message(from));
