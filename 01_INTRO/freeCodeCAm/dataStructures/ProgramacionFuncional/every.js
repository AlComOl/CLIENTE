function checkPositive(arr) {
  // Only change code below this line
  return arr.every(function (item){
      return item > 0;
 });

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);


function checkPositive1(arr) {
  // Only change code below this line

 return arr.some(function(item){
    return item>0;
  });
  
  // Only change code above this line
}

checkPositive1([1, 2, 3, -4, 5]);