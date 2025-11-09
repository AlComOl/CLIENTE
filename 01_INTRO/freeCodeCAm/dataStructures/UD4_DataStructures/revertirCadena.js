function reverseString(str) {
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
   
        reverse+=str[i];
  
    }
    
     return reverse;
}
console.log(reverseString("Hello"));



function reverseString1(str) {

    let newArray= str.split('');
    let res=(newArray.reverse()).join();
    res.split(',')
    
     return res;
}
console.log(reverseString1("Hello"));