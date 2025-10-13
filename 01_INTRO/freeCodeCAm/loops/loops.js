// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//     for(let i=0;i<arr.length;i++){
    
//       for(let z=0;z<arr[i].length;z++){
    
//             product*=arr[i][z];

//       }
//     }
//   // Only change code above this line
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// //recursividad
// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//         product *= arr[i];
       
//     }
//     return product;
// }


// function multiply1(arr, n) {
 
//     if(n<=0){

//       return 1;

//     }else{
       
//       return multiply1(arr, n-1)* arr[n-1];
//     }
   
// }


// console.log(multiply([1,2,3],3));
// console.log(multiply1([1,2,3],3));


function sum(arr,n){
  let product=1;
  for(let i=0;i<n;i++){
    product+=arr[i];
  }
  return product
}


function sum1(arr, n) {
  // Only change code below this line
  if(n<=0){
    return 1;
  }else{
    return sum(arr,n-1)+arr[n-1]
  }

}
alert("Hello")
[1, 2].forEach(alert);
console.log(sum([1,2,3],3));
console.log(sum1([1,2,3],3));

