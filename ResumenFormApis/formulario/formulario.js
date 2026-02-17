
const form= document.querySelector('form')

form.addEventListener('submit', function(event){

    event.preventDefault();

    confirmarFormulario();
});

function confirmarFormulario(){
    const nombre=document.getElementById('nombre').value;
    const regexNombre= /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
    const test=regexNombre.test(nombre);
    if(test===false){
        const comprobar=document.getElementById('comprobar');
        comprobar.innerHTML="Esta mal"

    }
}