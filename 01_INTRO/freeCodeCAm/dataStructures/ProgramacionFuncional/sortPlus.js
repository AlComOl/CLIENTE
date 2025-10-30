const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
const newArray=arr.concat([]);

  newArray.sort(function (a,b){
    if(a>b)return 1;
    if(a==b)return 0;
    if(a<b)return -1;
  });

 

return newArray;

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));