//declarar un array

const myArray=[1,2,3,4,5,6,7,8,9];
console.log(myArray);

// podemos crearlos como instancias de Objeto(No recomendado);
const a =new Array() //[]

const arr=[3,5,{nombre:'Alvaro'},'Hola',23,'Valencia'];
console.log(arr);//[ 3, 5, { nombre: 'Alvaro' }, 'Hola', 23, 'VAlencia' ]
console.log(arr[6]);//Undefined
console.log(arr[5]);//Valencia
arr[6]='Juan';//Introducir elementos
console.log(arr);

//Arrays de Objetos
const alumnos = [
  {
    id: 1,
    name: 'Álvaro Comenge',
    course: '2nDAW',
    age: 50
  },
  {
    id: 2,
    name: 'Paco Tortosa',
    course: '2nDAW',
    age: 36
  },
]
console.log(alumnos[1]);
console.log(alumnos[1].course);
console.log(alumnos[1].id);

//length 
console.log(arr.length);


//Añadir

const z=myArray.push('pop');
console.log(z);//['pop']
myArray.unshift("unshift");
console.log(myArray);//['pop','unshift']

//Eliminar
myArray1=[1,2,3,4,5,6,7,];
const p= myArray1.pop();//7
console.log(p);
console.log(myArray1);//[ 1, 2, 3, 4, 5, 6 ]

const primero=myArray1.shift();
console.log(primero);//1
console.log(myArray1);//[2,3,4,5,6]




