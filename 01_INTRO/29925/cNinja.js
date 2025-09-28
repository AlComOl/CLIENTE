/*
==============================
CÓDIGO NINJA - RESUMEN PRÁCTICO
==============================

1️⃣ Brevedad y operadores inteligentes
- Haz tu código lo más corto posible.
- Usa operadores ternarios y características sutiles de JavaScript.

Ejemplo:
*/
let i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

/*
2️⃣ Variables de una letra o exóticas
- Usa nombres cortos: a, b, c
- Usa nombres exóticos para confundir: xo, ye
- Evita letras triviales como i en bucles largos.

3️⃣ Abreviaturas
- Acorta nombres largos: list -> lst, userAgent -> ua
- Solo personas con intuición entenderán el código

4️⃣ Nombres abstractos
- Usa nombres generales: data, value, item, elem
- Si ya existen: data1, elem5
- Oculta el valor real y obliga a meditar

5️⃣ Prueba de atención
- Mezcla nombres similares: date y data
- Una lectura rápida se vuelve difícil

6️⃣ Sinónimos inteligentes
- Prefijos similares para funciones relacionadas:
  displayMessage(), showName(), paintFrame()
- Permite confusión controlada sobre su función exacta

7️⃣ Reutilización de nombres
- Reutiliza variables existentes en lugar de crear nuevas
- Útil en bucles o funciones largas

8️⃣ Subrayados para diversión
- _name, __value
- Sin significado estricto, solo para confundir

9️⃣ Variables exteriores superpuestas
let user = authenticateUser();
function render() {
  let user = anotherValue();
  // muchas líneas...
  // un desarrollador pensará que user es la variable externa
}

🔟 Efectos secundarios ocultos
function checkPermission(user) {
  // parece no cambiar nada, pero sí modifica algo interno
  user.status = 'checked';
  return { allowed: true, time: Date.now() };
}

1️⃣1️⃣ Poderosas funciones
- No limites la función a lo que dice su nombre
function validateEmail(email) {
  // además de validar, muestra un mensaje y guarda logs
  if (!email.includes('@')) alert('Email inválido');
  return email.includes('@');
}

/*
💡 Resumen filosófico
- Brevedad + astucia + abstracción
- Código confuso pero funcional
- Fomenta meditación sobre nombres, reutilización y efectos
- Sigue todos los consejos = código único y “ninja”
*/



