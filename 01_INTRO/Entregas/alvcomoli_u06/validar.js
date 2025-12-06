function validar(){
    const name=document.getElementById('nombre');
    const nameRGEX=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+/
    const validarNombre= nameRGEX.test(name);

    if(validarNombre==false){
        let msgeror=document.getElementById('error');
        msgeror.classList.add('error');

        msgeror.innerHTML='<strong>El nombre contiene caracteres invalidos<strong>';
        
    }  
    return false;
}