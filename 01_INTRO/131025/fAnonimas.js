// function ask(question,yes,no){

//     if (confirm(question))yes();
//     else no();

// }


// ask( "Do you agree?",
//     function() {alert("You agreed.")},
//     function() {alert("You called the caceled the execution.");}
// );


// ask("Do you agree",
//     ()=>alert("You agreed."),
//     ()=>alert("caceled")
     
// );


let nombre = (param1 , param2, param3) => {
  
  let sol=param1===true?"Es el 1 parametro":param2===true?"Es el 2 parametro":param3===true;

  return sol;
};

//Crea una función flecha llamada square que reciba un número y devuelva su cuadrado.

let square=(num)=>(num**2);


//Función sin argumentos

//Crea una función flecha llamada greet que no reciba argumentos y muestre un alert con el mensaje "Hola!".

let greet=()=>(console.log("Hola!"));

greet();

//Ejercicio 3 — Función con varios parámetros

//Crea una función flecha llamada average que reciba tres números y devuelva su promedio.



let average=(n1,n2,n3)=>{
    let res=(n1+n2+n3)/3;
    return res;
}


let average1=(n1,n2,n3)=>(n1+n2+n3)/3;


// Ejercicio 4 — Función flecha multilínea

// Crea una función flecha llamada checkEvenOdd que reciba un número y haga lo siguiente:

// Declare una variable result.

// Si el número es par, result debe ser "Par", si es impar, "Impar".

// Devuelva result.

let checkEvenOdd = (num) =>(result=num%2?"Inpar":"Par",console.log(result));
    
checkEvenOdd(3)


// Ejercicio 5 — Función con operadores ternarios

// Crea una función flecha llamada max que reciba dos números y devuelva el mayor usando un operador ternario.

let max=(num1,num2)=>(res=(num1>num2)?"num1 es mayor":"num2 es mayor", console.log(res));

max(2,3);