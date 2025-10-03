const character = "#";
const count = 8;
const rows = [];


// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i));
  
// }
// console.log(rows);


for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i+1)+ " \n");
  
}
console.log(rows);

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

let f= padRow("hola","caracola");

console.log(padRow);


function padRow(rowNumber, rowCount) {
  return " "+character+" ".repeat(rowNumber);
}


function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount-rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount-rowNumber);
}