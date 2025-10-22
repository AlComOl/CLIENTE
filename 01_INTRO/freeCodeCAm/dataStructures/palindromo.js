function palindromo(str){

    let res=str.toLowerCase();
     res=res.replace(/[^a-z0-9]/g, "");
     res=res.trim();
     
    let myArray= Array.from(res);
     myArray.reverse();
     myArray.join();
    
     let cadena1=myArray.join("");
 
     let palindromo=cadena1===res?true:false;

    

    return palindromo;
}

console.log(palindromo("eye"));