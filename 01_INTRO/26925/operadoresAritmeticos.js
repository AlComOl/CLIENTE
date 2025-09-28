


//resto
console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2

//exponente

console.log(5**2);

//string 

console.log("5"+"2");



//conversiones inplicita
//convierte a numero
console.log(2 + 2 + '1' );
console.log("6"/"2");//convierte a numero
console.log(6-"2" );//convierte a numero
let x = "1";
console.log( +x ); //casta a numero
let y = +true;//castea a numero el boleano false = 0
console.log(y);
console.log(""+1+3);
console.log(true+false);//castea a numero
console.log(4+5+"px");

//1️⃣ Conversión de tipos (Type Coercion)

console.log(""+1+1);//  +con string concadena todo
console.log(""-1+0);// -con string convierte string a numero
console.log(true+false); // suma todo true1 false 2
console.log(6/"2");//Los operadores aritmeticos convierten los string a numeros
console.log("4px"-2) //String no numerico
console.log(" -9 5"+5); //concadena todo con mas
console.log(" -95"-5); //pasa el string  a numero
console.log(" -56 "-56) //ignora espacion string a numero
console.log(null+1);//null -> 0 
console.log(undefined+1); //
console.log(NaN+1);//
console.log(" \t \n" -2); //convierte a número 0 -2 =-2

//2️⃣ Incremento y decremento (++ / --)

//Prefijo (++x)	    ++a	   nuevo valor	  a       aumenta antes de usarse

let a = 50;
let b = ++a;
console.log(a);

//Postfijo (x++)	b++	   valor viejo	  b       aumenta después de usarse

let c=10

let d= c++;//toma el valor de c antes de incrementarla 

console.log(d);

let f = 2;
let n = 1 + (f *= 2);

console.log(n);

console.log("4" - 2);
console.log("4px" - 2);

let w = 2;
w *= 3 + 5;
console.log(w);


let Pre = 1;
console.log(2 * ++Pre);


let Post = 1;
console.log(2 * Post++);



let a1 = 1, b1 = 1;
let c1 = ++a1;
let d1 = b1++;

console.log(a1+","+b1+","+c1+","+d1);



