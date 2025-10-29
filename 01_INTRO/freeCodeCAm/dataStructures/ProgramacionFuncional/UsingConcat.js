// function nonMutatingPush(original, newItem) {
//   // Only change code below this line
  
    

//   return original;

//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// console.log(nonMutatingPush(first, second));



function nonMutatingPush(original, newItem) {
  // Only change code below this line

  const newOriginal=original.concat(newItem);

  return newOriginal;

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);