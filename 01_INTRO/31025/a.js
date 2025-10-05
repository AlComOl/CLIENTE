// const character = "#";
// const count = 8;
// const rows = [];


// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i));
  
// }
// console.log(rows);


// for (let i = 0; i < count; i++) {
//   rows.push(character.repeat(i+1)+ " \n");
  
// }
// console.log(rows);

// function padRow(rowNumber, rowCount) {
//   return character.repeat(rowNumber);
// }

// let f= padRow("hola","caracola");

// console.log(padRow);


// function padRow(rowNumber, rowCount) {
//   return " "+character+" ".repeat(rowNumber);
// }


// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount-rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount-rowNumber);
// }


// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
// }

// // continueLoop=false;//Loop Infinito
// // while (continueLoop) {
// //  console.log("hola");
// // }
// let continueLoop = true;
// let done = 0;

// while (continueLoop) {
//   done++;
//   rows.push(padRow(done, count));
//   if (done === count) {
//     continueLoop = false;
//   } 
// }

const character = "#";
const count = 8;
const rows = [];
let continueLoop = true;
let done = 0;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// while (continueLoop) {
//   done++;
//   rows.push(padRow(done, count));
//   if (done === count) {
//     continueLoop = false;
//   } 
// }

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  } 
}


let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);