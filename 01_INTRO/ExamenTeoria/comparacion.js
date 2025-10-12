
let a ="a";
let A="A";

console.log(a>A);


// let value=+prompt("Ingrese numero");

// prompt(value);

/// la letras se comparan lexicologicamnete que quiere decir que la letra que esta antes en el abcdario se considera menor que la que esta despues 

console.log("andres">"luis>");//false porque luis tiene la l que esta delante de la a 

console.log(null==undefined);//true regla especial en java scrip 


// 2️⃣ Strings (lexicográficas / diccionario)

// Se comparan letra por letra, usando Unicode.

// Ejemplo:
console.log("apple" > "pineapple");   // false, porque "a" < "p"
console.log("Glow" > "Glee"      );   // true, porque "o" > "e"
console.log("Bee" > "Be"         );   // true, porque la segunda cadena es más corta

// 3️⃣ Comparación de distintos tipos

// JavaScript convierte automáticamente valores a número cuando se usan <, >, <=, >=.

// Ejemplo:

console.log(true == 1  ); // true, true → 1
console.log('2' > 1);// true, '2' → 2
console.log(false == 0);  // true, false → 0


// 4️⃣ Booleanos

// true → 1, false → 0 cuando se comparan con números.

// Pero con === no hay conversión de tipo, así que:

console.log(0 === false);
console.log('' === false )// false)


// 5️⃣ Null y Undefined
// Reglas extrañas:
// Comparación	        Resultado	                    Explicación

// null == undefined	true	regla especial
// null === undefined	false	tipos diferentes
// null > 0	false	null → 0, 0 > 0 → false
// null >= 0	true	null → 0, 0 >= 0 → true
// null == 0	false	== convierte null solo a undefined
// undefined > 0	false	undefined → NaN → cualquier comparación es false
// undefined < 0	false	NaN siempre devuelve false
// undefined == 0	false	undefined solo == null
//Tip: Nunca compares null/undefined con otros valores usando < > <= >= si no estás seguro.

// Comparación numérica: convierte todo a número
// - null → 0
// - undefined → NaN
// - boolean → 0/1
// - string → número si posible

// Strings: comparación lexicográfica (carácter a carácter)
// - "a" < "b"
// - "a" < "A"? "a" (97) > "A" (65) → true

// Igualdad:
// - ==  → convierte tipos
// - === → sin conversión (tipo + valor)
