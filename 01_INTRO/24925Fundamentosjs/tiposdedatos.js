//https://es.javascript.info/types
//a esto se le llama tipado dinamico
let mensage="hola";
mensage=1234;
console.log(mensage);

//Number reperesenta tanto a numeros enteros como a coma flotante
let n= 123;
n=12,34; 

//Infinity es un tipo de valor que representa el infinitos matematico 
//podemos obtenerlo asi;
console.log(1/0);

//NaN representa un error de calculo
console.log("hola"/2);

//BigInt
//Para ser realmente precisos, el tipo de dato “number”
//puede almacenar enteros muy grandes (hasta 1.7976931348623157 * 10308),
const bigInt = 1234567890123456789012345678901234567890;
console.log(bigInt+1);
//String cadena de caracteres entre comillas

let str="Hola";
let str2=" Mundo";



// En JavaScript, hay 3 tipos de comillas.

//     Comillas dobles: "Hola".
//     Comillas simples: 'Hola'.
//     Backticks (comillas invertidas): `Hola`.
// Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). 
// No hay diferencia entre ellas en JavaScript.
// Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en 
// una cadena de caracteres encerrándolas en ${...}

let phrase=`se puede concadenar asi la frase ${str}${str2}`

console.log(phrase);

//Bolean(tipo lógico)
// El tipo boolean tiene sólo dos valores posibles: true y false.
let isGreater = 4 > 1;

console.log(isGreater);

// El valor “null” (nulo)
// En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.

// Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

let nulo=null;
console.log(nulo);

// El valor “undefined” (indefinido)
// Si una variable es declarada, pero no asignada, entonces su valor es undefined:

let indefinida;

console.log(indefinida);
// El operador typeof
// El operador typeof devuelve el tipo de dato del operando.
//  Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente 
//  queremos hacer una comprobación rápida.

console.log(typeof(2));
// Se puede encontrar otra sintaxis en algún código: typeof(x). Es lo mismo que typeof x.
console.log(typeof 10n); 
console.log(typeof alert);
console.log(typeof null);

// Hay 8 tipos básicos en JavaScript.


//         *number para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(253-1).
//         *bigint para números enteros de longitud arbitraria.
//         *string para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo especial para un único carácter.
//         *boolean para verdadero y falso: true/false.
//         *null para valores desconocidos – un tipo independiente que tiene un solo valor nulo: null.
//         *undefined para valores no asignados – un tipo independiente que tiene un único valor “indefinido”: undefined.
//         *symbol para identificadores únicos.
//              Y un tipo de dato no primitivo:
//         *object para estructuras de datos complejas.

// El operador typeof nos permite ver qué tipo está almacenado en una variable.

//     Dos formas: typeof x o typeof(x).
//     Devuelve una cadena con el nombre del tipo. Por ejemplo "string".
//     Para null devuelve "object": esto es un error en el lenguaje, en realidad no es un objeto.


