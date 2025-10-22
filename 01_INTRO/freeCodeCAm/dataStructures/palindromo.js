function palindromo(str){

     res=str.toLowerCase();
     res=res.replace(/[^a-z0-9]/g, "");
     res=res.trim();
     
    let myArray= Array.from(res);
     myArray.reverse();
     myArray.join();
     console.log(myArray);
     console.log(res);
   

    return myArray;
}

console.log(palindromo("race*Car  "));