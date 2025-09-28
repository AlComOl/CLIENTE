const positive = true;
const negative = false;
const expression1 = 10 > 5;             // true
const expression2 = "hola" == "adios"   // false
 console.log(expression2);

//Conversiones explícitas

 const number= 42;
//name te da el nombre de la funcion constructora
 number.constructor.name;

 console.log(number);

 //lo mismo convierte a string

 const text= String(number);
 text.constructor.name;
 console.log(text);

//los valores Truthy son valores que, aunque no sean booleanos, se comportan como un booleano true:

Boolean(5)        // true         TRUTHY!
Boolean(0)        // false
Boolean(-4)       // true         TRUTHY!
Boolean("Hola")   // true         TRUTHY!

//aunque realmente no es un booleano false, se comporta como tal. 
 console.log(Boolean(true));//true
 console.log(Boolean(false));//falso
 console.log(Boolean(0));//falso FALSY!
 console.log(Boolean(""));//falso FALSY!

    // 1️⃣ Cualquier valor false, (obviamente) se considera false.
    // 2️⃣ Cualquier valor que sea 0, incluyendo 0.0 o 0n (bigint), se considera false.
    // 3️⃣ Cualquier valor que sea una cadena vacía (""), se considera false.
    // 4️⃣ Los valores especiales null, undefined y NaN también se consideran false.
    // 5️⃣ El resto de valores, se consideran truthy, por lo que serán true.


//Conversiones Implicitas
console.log("/////////////////////////////CONVERSIONES IMPLICITAS /////////////////////////////////////")

let item=Number("42");
console.log(item);

let item1=String(42);
console.log(item1);

// Se fuerza un texto a número (de forma implícita)
let item2=+"1234";
console.log(item2);
// Se convierte el número a texto y se concadena(se une).
let item3="22"+22;
console.log(item3);


//ESTOS CASOS TE PODRIAN CONFUNDIR 
// Realmente no es cero, es un string que no es vacío
Boolean("0");           // true

// Realmente no false, es un string que no es vacío
Boolean("false");       // true

// Aunque sea un array vacío, es un elemento que existe
Boolean([]);            // true
Boolean([0]);           // true

// El signo negativo realiza una conversión implícita, evaluando array como número
Boolean(-[]);           // false
Number(-[]);       

