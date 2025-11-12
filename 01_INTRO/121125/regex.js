




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

