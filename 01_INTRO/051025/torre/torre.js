// const character="#";
// const count=8;
// const rows=[];
// let result="";


// function padRow(rowNumber,rowCount){
//     return " ".repeat(rowCount - rowNumber) +character.repeat(2*rowNumber-1)+" ".repeat(rowCount - rowNumber) ;
// }

// for(let i=1;i<count;i++){
//     rows.push(padRow(i,count));
// }
// for(const row of rows){
//     result+=row+"\n";
// }

// console.log(result);



// function getAverage(scores) {
// let res,sum=0;
    

//         for(let i=0; i<scores.length ;i++){
//           sum+=scores[i];
        
//         }
//          res=sum/scores.length; 
// return res;
// }


function getAverage(scores) {
      let sum=0;
  let res=0;

  for(let i=0;i<scores.length;i++){
    sum+=scores[i];
  }
  res=sum/scores.length;
  return res;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
