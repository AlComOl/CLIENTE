const squareList = arr => {
  // Only change code below this line
  const newSquareLis=arr.filter(function(item){
           return item>=0 && Number.isInteger(item);
        });
        return newSquareLis;
    }


const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
