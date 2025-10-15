// 📝 Ejercicios

// Recorrido y suma de elementos
// Dado el array:
// Escribe una función que recorra el array y devuelva la suma de todos sus elementos. 
// cualquiera de los métodos de recorrido vistos en el artículo (por ejemplo, for, for…of, forEach, etc.).
const nums = [3, 5, 7, 2, 8];

(()=>{ 
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
     console.log(sum);
})()

let sum1=0;
for (const element of nums) {
      sum1+=element;
  
}
console.log(sum1);