

// function getGrade(score) {
//   let result;
//   if(score===100){

//     result="A++";
    
//   }else if(score<=99 && score>=90){

//     result="A";

//   }else if(score<=89 && score>=80){

//     result="B";

//   }else if(score>=70 && score<=79){

//     result="C";

//   }else if(score<=60 && score<=69){

//     result="D";

//   }else if(score>=0 && score<=59){

//     result="F";

//   }else{
//     result="No esta calificado";
//   }

//   return result;
// }

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(78));

// function hasPassingGrade(score) {
//   let result = score=="F" ? false : true;
//   return result;
// }

// function hasPassingGrade(score) {
//   let result = score  == "F" ? false : true;
//   return result;
// }


// console.log(hasPassingGrade("A"));

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function studentMsg(totalScores, studentScore) {
  let res=getAverage (totalScores);
  let resEstudent=getGrade(studentScore);
    

        if(resEstudent==="F"){
            message="Class average: "+ res +" Your grade: "+resEstudent+" You failed the course.";
        }else{
            message= "Class average: "+res+" Your grade: "+resEstudent+" You passed the course";
        }

    return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));