// 1. Seleccionar los elementos del DOM
const n1Input = document.getElementById("n1");
const n2Input = document.getElementById("n2");
const opSelect = document.getElementById("op");
const resOutput = document.getElementById("res");
const boton = document.getElementById("b");

// 2. Función pura para realizar la operación
function operacion(n1, operador, n2) {
  switch (operador) {
    case "+": return n1 + n2;
    case "-": return n1 - n2;
    case "*": return n1 * n2;
    case "/": return n2 !== 0 ? n1 / n2 : "Error: división por 0";
    default:  return "Operador no válido";
  }
}

// 3. Calcular cuando el usuario hace clic en el botón
boton.addEventListener("click", () => {
  const n1 = n1Input.valueAsNumber; // convierte a número automáticamente
  const n2 = n2Input.valueAsNumber;
  const op = opSelect.value;

  const resultado = operacion(n1, op, n2);

  resOutput.textContent = `Resultado: ${resultado}`;
});
