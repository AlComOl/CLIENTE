// Patrones

// La potencia de las expresiones regulares es que podemos usar patrones para construir la expresión. Los más comunes son:

//     [..] (corchetes): dentro se ponen varios caracteres o un rango y permiten comprobar si el carácter de esa posición de la cadena coincide con alguno de ellos. Ejemplos:
//         [abc]: cualquier carácter de los indicados (‘a’ o ‘b’ o ‘c’)
//         [^abc]: cualquiera excepto los indicados
//         [a-z]: cualquier minúscula (el carácter ‘-‘ indica el rango entre ‘a’ y ‘z’, incluidas)
//         [a-zA-Z]: cualquier letra
//     ( | ) (pipe): debe coincidir con una de las opciones indocadas:
//         (x|y): la letra x o la y (sería equivalente a [xy])
//         (http|https): cualquiera de las 2 palabras
//     Metacaracteres:
//         . (punto): un único carácter, sea el que sea
//         \d: un dígito (\D: cualquier cosa menos dígito)
//         \s: espacio en blanco (\S: lo opuesto)
//         \w: una palabra o carácter alfanumérico (\W lo contrario)
//         \b: delimitador de palabra (espacio, ppio, fin)
//         \n: nueva línea
//     Cuantificadores:
//         +: al menos 1 vez (ej. [0-9]+ al menos un dígito)
//         *: 0 o más veces
//         ?: 0 o 1 vez
//         {n}: n caracteres (ej. [0-9]{5} = 5 dígitos)
//         {n,}: n o más caracteres
//         {n,m}: entre n y m caracteres
//         ^: al ppio de la cadena (ej.: ^[a-zA-Z] = empieza por letra)
//         $: al final de la cadena (ej.: [0-9]$ = que acabe en dígito)
//     Modificadores:
//         /i: que no distinga entre mayúsculas y minúsculas (Ej. /html/i = buscará html, Html, HTML, …)
//         /g: búsqueda global, busca todas las coincidencias y no sólo la primera
//         /m: busca en más de 1 línea (para cadenas con saltos de línea)




let aux;
let re;
let msg;


re = /hola/
msg ="hola Mundo"
aux = re.test(msg);
console.log(aux);

re = /hola/
msg ="que hola mundo hola"
console.log(re.exec(msg));

// exec=> todas las cosas que han echo match

re = /hola/
msg ="hola mundo hole"
console.log(msg.match(re));
console.log(re.exec(msg));


////^ dentro del parentesis negacion
//$ ultima linea 
//^ dentro del parentesis principio de linea
/////////////////////////////////////////////////////////////////////
//coirchete => rango o substring
re =/hol[abc]/
msg="hola holb holdcMindo hole"




