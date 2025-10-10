function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
    for(let i=0;i<arr.length;i++){
    
      for(let z=0;z<arr[i].length;z++){
    
            product*=arr[i][z];

      }
    }
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));