// =======================================================
// 1️ Objetos nativos en JavaScript
// Explicación: Son objetos que JavaScript ya tiene incorporados.
// Sirven para trabajar con datos, matemáticas, fechas, etc.
// =======================================================
const persona = { nombre: "Ana", edad: 25 }; // Objeto literal
console.log(persona.nombre); // Acceder a propiedad -> "Ana"

console.log(Math.PI);        // Número PI
console.log(Math.round(4.7)); // Redondea al entero más cercano -> 5
console.log(Math.random());   // Número aleatorio entre 0 y 1

// =======================================================
// 2️ Date (Fechas nativas)
// Explicación: Permite crear y manipular fechas y horas.
// =======================================================
let ahora = new Date(); // Fecha y hora actuales
console.log("Fecha actual:", ahora);

let navidad = new Date(2025, 11, 25); // Año, mes (0-11), día
console.log("Navidad 2025:", navidad);

console.log("Año actual:", ahora.getFullYear()); // Año
console.log("Mes actual:", ahora.getMonth());   // Mes 0-11
console.log("Día del mes:", ahora.getDate());   // Día del mes
console.log("Hora actual:", ahora.getHours());  // Hora

// =======================================================
// 3️ JSON.stringify
// Explicación: Convierte un objeto JavaScript en una cadena JSON.
// Útil para guardar o enviar datos.
// =======================================================
const objeto = { nombre: "Luis", edad: 30 };
const jsonString = JSON.stringify(objeto);
console.log("JSON string:", jsonString); // '{"nombre":"Luis","edad":30}'

const objParseado = JSON.parse(jsonString); // Convertir JSON a objeto
console.log("Nombre desde objeto parseado:", objParseado.nombre); // "Luis"

// =======================================================
// 4️ Funciones de interacción con el usuario
// Explicación: Permiten mostrar mensajes o pedir datos.
// alert(): mostrar mensaje
// prompt(): pedir dato al usuario
// confirm(): pregunta al usuario devuelve true/false
// =======================================================
// alert("Bienvenido al examen!");

// let nombre = prompt("¿Cómo te llamas?"); 
// console.log("Usuario:", nombre);

// let quiereContinuar = confirm("¿Quieres continuar?");
// console.log("Continúa:", quiereContinuar);

// =======================================================
// 5️ setTimeout y setInterval
// Explicación:
// setTimeout(func, tiempo): ejecuta func una vez después de tiempo (ms)
// setInterval(func, tiempo): ejecuta func repetidamente cada tiempo (ms)
// =======================================================
setTimeout(() => {
  console.log("Esto aparece tras 2 segundos"); // Ejecuta 1 vez
}, 2000);

let contador = 0;
let intervalID = setInterval(() => {
  contador++;
  console.log("Contador:", contador); // Ejecuta cada segundo
  if (contador === 5) clearInterval(intervalID); // Detener el interval
}, 1000);

// =======================================================
// 6️ parseFloat() y parseInt()
// Explicación: Convierte cadenas a números.
// parseFloat(): número decimal
// parseInt(): número entero
// =======================================================
console.log(parseFloat("3.14"));     // 3.14
console.log(parseInt("42"));         // 42
console.log(parseInt("42px"));       // 42 (ignora lo que no sea número)
console.log(parseFloat("10.5abc"));  // 10.5

// =======================================================
// 7️ isNaN()
// Explicación: Devuelve true si el valor NO es un número.
// =======================================================
console.log(isNaN(123));       // false
console.log(isNaN("hola"));    // true
console.log(isNaN("123"));     // false, se convierte a número

// =======================================================
// 8️ instanceof
// Explicación: Permite comprobar si un objeto es instancia de una clase o constructor.
// =======================================================
console.log([] instanceof Array);        // true, es un array
console.log([] instanceof Object);       // true, array es objeto
console.log(new Date() instanceof Date); // true, es Date
console.log({} instanceof Array);        // false, no es array