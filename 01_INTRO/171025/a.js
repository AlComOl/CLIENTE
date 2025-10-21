//https://cipfpbatoi.github.io/materials/daw/dwc/01-js/02.1-objetos.html

const alumno = {
    nombre: 'Carlos',
    apellidos: 'Pérez Ortiz',
    obj2:{a1:1,a2:2},
    edad: 19,
    const alumno = {
,
};
console.log(alumno.nombre)       // imprime 'Carlos'
console.log(alumno['nombre'])    // imprime 'Carlos'
let prop = 'nombre'
console.log(alumno[prop])        // imprime 'Carlos'
//Cuando declaras un objeto con const, no puedes asignarle un objeto nuevo, pero sí puedes cambiar sus propiedades internasCuando declaras un objeto con const, no puedes asignarle un objeto nuevo, pero sí puedes cambiar sus propiedades internasCuando declaras un objeto con const, no puedes asignarle un objeto nuevo, pero sí puedes cambiar sus propiedades internas
console.log(alumno.hora);// no peta pero sale

//console.log(alumno.obj2.[0]);
console.log(alumno);

console.log(alumno.nombre)


alumno=paciente;
//en las expresiones como funciones tiene su propio this , se pierde el contexto