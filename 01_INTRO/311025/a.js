//Eloquent jsx
//The pragmatic programmer
//http:teachyourself.com

//https://www.theodinproject.com/

//fullstackopen

//clean code
//Raul


function makeCounter(){
    let count=0;
    return function(){
        
        return count++;
    }
};

const counter=makeCounter();
counter();


console.log(counter()); //=> aqui llamamos a la funcion y la llamamos
console.log(makeCounter()); //=> aqui llamamos a una funcion que devuelve otra 