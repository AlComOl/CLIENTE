
let p = document.getElementById("pres")
let c =document.getElementById("cam")
let cuerpo = document.body;
let myarray=["Jose","Vicente","Aitor","luis"];
p.addEventListener("click" , () =>{
    console.log("boton pulsado")
    cuerpo.style.background="blue";

})
c.addEventListener("click", () => {
    cuerpo.style.background="white";
})

myarray.push("Alvaro");
let nuevo=myarray.pop();

let aleatorio= myarray[Math.floor(Math.random()*myarray.length)];
console.log(aleatorio);




document.write(aleatorio);
document.writeln(nuevo);