//Implement the filter Method on a Prototype

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
   this.forEach((elemento,indice, array) =>{
     if(callback(elemento,indice,array)){ 
       newArray.push(elemento);
     }
   });
    
  // Only change code above this line
  return newArray;
};
const citi=["España","Alemania","Italia","Francia","Ungria"];

function cities(citi){

   const c = citi.slice(0,3);

   return c
}

console.log(cities(citi));
