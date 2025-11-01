function rot13(str) {
  let result = "";

  for (let letra of str) {
    if (letra >= "A" && letra <= "Z") {
      let codigo = letra.charCodeAt(0); // convierte a número ASCII
      codigo += 13;                     // aplica ROT13

      if (codigo > 90) {                // si pasa de 'Z'
        codigo -= 26;                   // vuelve a empezar desde 'A'
      }

      result += String.fromCharCode(codigo); // vuelve a letra
    } else {
      result += letra; // deja espacios, signos de puntuación, etc.
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));