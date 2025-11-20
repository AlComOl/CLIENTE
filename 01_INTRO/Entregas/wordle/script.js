
let palabra= "index";
let palabraArray=palabra.split('');


let filaActual=document.querySelector('.row');

palabraArray.forEach(() => {
   filaActual.innerHTML += `<input type="text" maxlength="1" class="cuadrado"></input>`
});

let cuadrados=document.querySelectorAll('.cuadrado');
cuadrados=[...cuadrados];//convierte array el nodeList asi tengo mas funciones para utilizar (foreach etc..)

let entradaUsuario=[];

cuadrados.forEach(element=>{
    element.addEventListener('input',event=>{
        console.log(event.target.value);
        
    });
})

