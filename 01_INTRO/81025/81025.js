let ask =(question,yes,no) =>{if(confirm(question))yes();else{ no()} }


ask(
"Do you agree?",

()=> {console.log("You agree");},

()=>{console.log("You cancelled the execution.");}
);


function sayHi(prase,who){
    console.log("SAYHI")    ;
    return()=>console.log("arrowfucntion");
}

setTimeout(sayHi(),5000,"hello,","Jonh");
console.log("Holis");


function sayhi(phase,who){
    console.log("sayHi execution");
    console.log(phase+","+who);
    return(a,b,c)=>{
        console.log(`arrow fun ${a} y ${b} y ${c}`)
    }
}

setTimeout(sayHi(),5000,"hello","Jonh");

 setInterval();