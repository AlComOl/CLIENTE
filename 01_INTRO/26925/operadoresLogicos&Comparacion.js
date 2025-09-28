//4. Tipos diferentes → conversión a número

//Antes de comparar, ==, <, >, etc. convierten los valores a número (salvo ===).

console.log(""==3);
console.log("3"<4);

//⚠️ Pero la conversión booleana explícita (Boolean(x)) usa reglas distintas, de ahí casos raros como:
console.log(Boolean(0));//false
console.log(Boolean("0"));//true
console.log(0=="0");

//🔑 5. Igualdad estricta

//=== y !== NO convierten tipos.

console.log(0 == false);
console.log(0 === false);

//🔑 6. null y undefined

console.log(null===undefined);
console.log(null == undefined); // true (regla especial)
console.log(undefined===0);//false

console.log(null > 0 )  // false  (0 > 0 → false)
console.log(null == 0)  // false  (solo igual a undefined)
console.log(null >= 0)  // true   (0 >= 0 → true)

console.log(undefined > 0)  // false (NaN > 0 → false)
console.log(undefined == 0) // false (solo igual a null)

console.log(typeof(null));



i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

console.log(i)