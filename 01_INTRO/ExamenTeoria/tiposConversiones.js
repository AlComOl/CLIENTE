console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//
//Cuando convertimos una cadena a número, los espacios al principio y al final se ignoran, y la cadena se lee como número si es válida.
console.log(Number("123")); //123
//En JavaScript, los valores “vacíos” o “falsy” se convierten a false en booleano:
console.log(Boolean(0));
//En JavaScript, los valores “llenos” o “truhsy” se convierten a false en booleano:
console.log(Boolean(12));
//Una cadena no vacía, aunque contenga "0", se convierte en true en booleano.
console.log(Boolean("0"));
//La cadena vacía "" se considera un valor “falsy” y se convierte en false en booleano.
console.log(Boolean(""));
//La función String(value) convierte cualquier valor a cadena literal:
console.log(String(true));
//Una cadena vacía "" se convierte a número como 0.
console.log(String(null));

console.log(Number(""));
//NaN es un valor falsy, por lo que su conversión booleana es false.
console.log(Boolean(NaN)); // false
//Los espacios en blanco al convertir a número se ignoran, y si no queda ningún dígito, el resultado es 0.
console.log(Number("    "));
//Una cadena no vacía, incluso si solo contiene espacios, se considera true en booleano.
console.log(Boolean("    "));
//Al convertir a número, los espacios en blanco y saltos de línea se ignoran, por lo que "123\n" se convierte en 123.
console.log(Number("123/n"));
//null es un valor “falsy”, por lo que su conversión booleana es false.
console.log(Boolean(null));

// 1️⃣ null vs undefined en conversión a número

// Error frecuente: Confundir null con undefined al convertir a número.

// Regla:

// null → 0

// undefined → NaN

console.log(Number(null));      // 0
console.log(Number(undefined)); // 

// 2️⃣ Cadenas vacías y espacios en conversiones
Truco:

//Cadena vacía = falso, cadena con algo aunque sea espacio = verdadero.

// Error frecuente: Pensar que "" o " " se convierten a NaN.

// Regla:

// "" → 0 al convertir a número

// " " (espacios) → se ignoran, si no hay dígitos → 0

// Pero en booleano, cualquier cadena no vacía → true
console.log(Number(""));  // 0
console.log(Number(" ")); // 0
console.log(Boolean("")); // false

// 3️⃣ Booleanos convertidos a cadena

// Error frecuente: Creer que String(true) devuelve 1 o diferente.
//Truco:
//Booleanos → texto literal "true" o "false" cuando usamos String()

// Regla:

// String(true) → "true"

// String(false) → "false"

console.log(String(true));  // "true"
console.log(String(false)); // "false"

//primero convierte a strig "true" despues typeof el tipo de "true es string"
let value=true;
console.log (typeof String(value));


// 4️⃣ Operador AND (&&)

// Devuelve el primer valor falsy si existe.

// Si todos son truthy, devuelve el último valor.

console.log("Cat" && "" && "Dog");  // ""  → se detiene en el primer falsy
true && "Hello"        // "Hello" → todos truthy, devuelve último

//✅ Tip: && no convierte automáticamente a boolean, devuelve el valor real evaluado.

// 5️⃣ Operador OR (||)

// Devuelve el primer valor truthy.

// Si todos son falsy, devuelve el último valor.


// 6️⃣ Negación (!)

// !valor → convierte a boolean y niega: truthy → false, falsy → true

// !!valor → convierte a boolean sin cambiar el valor:
