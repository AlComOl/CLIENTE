// new Number(number)	Crea un objeto numérico a partir del número number pasado por parámetro.
// number	Simplemente, el número en cuestión. Notación preferida.



// Notación literal (preferida)
const number = 4;
const decimal = 15.8;
const legibleNumber = 5_000_000;

// Notación con objetos (evitar)
const number1 = new Number(4);
const decimal1 = new Number(15.8);
const letter = new Number("A");

console.log(number);
console.log(decimal);
console.log(legibleNumber);
console.log(number1);
console.log(decimal1);
console.log(letter);
