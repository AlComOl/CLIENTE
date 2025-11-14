
"use strict";
// https://regexr.com/
// https://regex101.com/
// guía más amplia -> https://www.freecodecamp.org/learn/full-stack-developer/review-javascript-regular-expressions/review-javascript-regular-expressions

/** Expresión regular -> describe un patrón de texto */

// modificadores 
// i 
// g
// m

/*
[abc]: cualquier carácter de los indicados (‘a’ o ‘b’ o ‘c’)
[^abc]: cualquiera excepto los indicados
[a-z]: RANGOS cualquier minúscula (el carácter ‘-‘ indica el rango entre ‘a’ y ‘z’, incluidas)
[a-zA-Z]: RANGOS cualquier letra
*/

let aux;
let re ;
let msg;

// ---------- MATCH DE UNA CADENA LITERAL
// re = /hola/
// msg = "hola Mundo"
// aux = re.test(msg) //true
// //console.log(aux)

// re = /hola/
// msg = "que hola Mundo hola"
// //console.log(re.exec(msg)) //-------

// re = /hol./g
// msg = "hola Mundo hole"
// //console.log(msg.match(re))
// //console.log(re.exec(msg))


// re = /Hola/
// msg = "hola Mundo"
// aux = re.test(msg) //false


// re = /Hola/i   // ignore case
// msg = "hola Mundo"
// aux = re.test(msg) //true
// //console.log(aux)


// // ----------- CORCHETES -> match a uno de los caracters o a uno que se encuentre en el rango


// re = /[abc]/
// msg = "a"
// aux = re.test(msg)  // true

// re = /hol[abc]/g
// msg = "hola holb holcMundo hole"
// aux = re.test(msg)  // true
// //console.log(msg.match(re))
// //console.log(re.exec(msg))

// re = /[^abc]/   // ^ modificador DENTRO de corchetes -> "NO PUEDE HACER MATCH!" -> NEGACIÓN
// msg = "a"
// aux = re.test(msg) //false


// // -- RANGOS
// aux = /[a-z]/.test("hola"); //  contiene letras minúsculas
// aux = /[A-Z]/.test("Hola"); //  contiene mayúscula
// aux = /[0-9]/.test("2025"); //  contiene dígito

// // rangos
// aux =  /[a-zA-Z]/.test("React"); //  contiene letras
// re = /[a-zA-Z0-9]/g
// msg = "user123"
// aux = re.test(msg); //  letras o números
// //console.log(msg.match(re))


// // -- Alternativas con | 

// aux = /(html|css|js)/.test("Aprendo js");   // contiene uno de esos strings
// //console.log(aux)

// re = /(http|https):\/\/.+[.](es|com)/g
// msg = "http://google.com\nhttps://apple.es\nhttpss://itacadocent.com"
// aux = re.test("https://google.com");   // tengo que "escapar" las '/' 
// console.log(aux)
// console.log(re.exec(msg))
// console.log(msg.match(re))


// // CUANTIFICADORES 

// // + 1 ó más veces 
// aux = /\d+/.test("2025");         // true  /d -> dígitos
// aux = /\d+/.test("abc");          // false 

// // *  0 ó más veces 

// aux = /bo*/.test("b");        //  o=0
// aux = /bo*/.test("booo");     //  o=3
// aux = /bo*/.test("a");        //  false

// // ? → 0 o 1 vez (opcional)   del carácter que precede
// aux = /colou?r/.test("color");    // true  
// aux = /colou?r/.test("colour");   // true
// aux = /colou?r/.test("colouur");  // false -> puede haber 0 ó 1 u  antes que la r


// // {n} → Exactamente n veces
// aux = /^\d{5}$/.test("28013");   // true
// aux = /^\d{5}$/.test("123");     // false
// // {n,} → n o más veces
// aux = /\d{2,}/.test("123");      //  (2 o más)

// // {n,m} → Entre n y m veces
// aux = /^[a-z]{3,5}$/.test("hola");   // true
// aux = /^[a-z]{3,5}$/.test("holaaa"); // false

// //^ → Inicio
// //$ → Final

// aux = /^[A-Z]/.test("Hola");     //  primera mayúscula
// aux = /^[0-9]$/.test("abc4");    // acaba en número


// // METACARACTERES 
// // .  -> cualquier carácter

// // OJO!! -> si el '.' está entre corchetes, significa que es literalmente un '.'

// aux = /./.test("a");            //  true
// aux = /.../.test("hey");        //  true
// aux = /.../.test("hi");         //  false
// aux = /h.t/.test("hat");        //  true
// aux = /h.t/.test("ht");         //  false

// // \d dígito  y \D "no dígito"

// aux = /\d\d\d/.test("123");     //  true
// aux = /\d\d\d/.test("12a");     //  false
// aux = /\D/.test("abc");         //  true

// // \s  espacio en blanco (tabs, espacio, etc) ,   \S no espacio

// aux = /\s/.test("Hola Mundo");  // true
// aux = /\S/.test("  ");          // false


// // \w carácter alfanumérico o  '_'   , \W -> carácter no alfanumérico
// aux = /\w+/.test("hola123");
// aux = /\W/.test("hola!"); 

// // \b → Límite de palabra
// aux = /\bcat\b/.test("black cat");  // true 
// aux = /\bcat\b/.test("category");   // false

// // \n  nueva línea
// aux = /^Hola\nMundo$/.test("Hola\nMundo");  // true


// // uso de grupos para capturar campos -> 
// re = /^([\w.-]+)@([\w.-]+)\.([a-z]{2,})$/i;
// aux = re.exec("profe.demo-23@iescurso.edu");  // me de vuelve un array con lo capturado en cada grupo
//console.log(aux);
//console.log(aux[1])
//console.log(aux[2])
/*
[
  'profe.demo-23@iescurso.edu',
  'profe.demo-23',   // grupo 1 → usuario
  'iescurso',        // grupo 2 → dominio
  'edu'              // grupo 3 → extensión
]
*/ 


// uso de replace con /g  -> sustituir todo lo que cumpla un patrón


// EJERCICIOS
//https://wikiserver.infomerce.es/index.php/NF1_-_Esdeveniments_i_Validacio_de_formularis#M.C3.A8todes_de_les_Expressions_Regulars
/*
Crea un patrón para cada una de las distintas cadenas que se muestran a continuación:

Código postal. Ej: 46700*/
let codigo = 46700;
let regex=/\b\d{5}\b/g;

let res=regex.test(codigo);
console.log(res);

/*Número de teléfono con prefijo y guiones, el primer número puede ser un 8 ó 9. Ej: 93-123-11-33*/
let n= "93-123-11-33";
let r = /[89]/;
let res1=r.test(r);
console.log(res1);
/*Número de teléfono con prefijo y puntos. Ej: 93-1.231.1339


/*Número de teléfono internacional. Ej: (+34)952356817
Nombre de usuario con un mínimo de 4 y un máximo de 15. Ej: julio_30*/
let usuario = "julio_30";
let red = /^[a-zA-Z0-9_]{4,15}$/;
let resultado = red.test(usuario);
console.log(re);
/*Número Real. Ej: -122.33 ó 7,3 ó 8*/
/(\+|-)?([,.])\d+)?/g

/*Número ISBN de 13 dígitos: 978-3-16-148410-0*/

/*Número de la seguridad social: 01-123456789*/

/*Dirección Postal con las siguientes condiciones: Calle (C\), Plaza(Pz.), Avenida(Av.). Dirección. Numero - Puerta.
Ej: C\ Virgen de montserrat. 233 - 2

Número IP de un ordenador de la versión 4.
Numero Mac de un ordenador separados por ':'
URL (con http, https, www, etc)
Fecha: Ej: DD/MM/AAAA
Hora: 23:55:55
Email
Comprobar un número propio
Tarjeta de crédito

*/

// OTROS ------------------
// cosas complejas -> los lookahead para las contraseñas 
//  -> sirven para comprobar una condición pero no ocupa "lugar" en el match 
//      (1)     (2)         (3)      (4)                 
// ^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

//  ^       -> comienzo de palabra
//    (?!.*\s) -> lookahead negativo, es decir, no puede contener espacios
//    (?=.*[A-Z])   ->
//      (   ) -> un grupo, se usa para diferenciar
//      ?=    ->  lookahead positivo en algún momento de la cadena ...
//      .*    -> 0 o más repeticiones de cualquier carácter ... 
//      [A-Z] -> seguido de una mayúsculas 

//    (?=.*[a-z])  -> lo mismo pero "contiene minúsculas"
//    (?=.*\d)     -> lo mismo pero "contiene números"

//    .{8,}    -> cualquier carácter, al menos 8 

