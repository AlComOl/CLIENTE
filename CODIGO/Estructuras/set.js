//declaracion SET 
mySet= new Set(["Alvaro", "Comenge","Oliver", "Carmen", "Oliver ", "Marques"]);
//no puede ducplicar es como si tubieras un 1 no 20 
mySet1= new Set([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
//esta mal declarado esto es un ARRAY
mySet1=([1,1,,1,1,1,1,,1,1,1,1,1,1,1]);
console.log(mySet);

//metodos Set

// ADD añade elementos al set al final, solo añade 1, los demás los ignora.
mySet.add("Luis");

console.log(mySet);

//DELETE borra elementos del SET, borra de uno en uno, NO VA POR INDICES COMO LOS ARRAY
mySet.delete("Luis");

console.log(mySet);

//si puede borrar el elemento devuelve true 
console.log(mySet.delete("Alvaro"));

console.log(mySet);
//No puede añadir elementos duplicados 
mySet.add("Alvaro");
console.log(mySet);

console.log("Mal declarado el set es un array")
console.log(mySet1);



//HAS 