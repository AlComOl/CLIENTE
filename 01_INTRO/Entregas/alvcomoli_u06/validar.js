// function validarNombre(){
//     const name=document.getElementById('nombre');
//     const nameRGEX=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+/
//     const validarNombre= nameRGEX.test(name);

//     if(validarNombre==false){
//         let msgeror=document.getElementById('error');
//         msgeror.classList.add('error');

//         msgeror.innerHTML='<strong>El nombre contiene caracteres invalidos<strong>';
        
//     }  
//     return false;
// }

document.addEventListener('submit',(event)=>{

    //valida nombre
     const name=document.getElementById('nombre').value;//la cagava con el value
     const nameRGEX=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/
     const validarNombre= nameRGEX.test(name);

      if(validarNombre==false){
        event.preventDefault();

        let msgeror=document.getElementById('error');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El nombre contiene caracteres invalidos<strong>';    
    }

    //valida apellido1
     const apellido1=document.getElementById('1Apellido').value;
     const RGEXApellido1=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/ //la $ filtra hasta el final si no la pones y pones digitos se lo traga
     const validarApellido1= RGEXApellido1.test(apellido1);

      if(validarApellido1==false){
        event.preventDefault();

        let msgeror=document.getElementById('error1');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El 1º Apellido contiene caracteres invalidos<strong>';    
    }
   //valida apellido2

     const apellido2=document.getElementById('2Apellido').value;
     const RGEXApellido2=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/
     const validarApellido2= RGEXApellido2.test(apellido2);

      if(validarApellido2==false){
        event.preventDefault();

        let msgeror=document.getElementById('error2');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El 2º Apellido contiene caracteres invalidos<strong>'; 
 
    
      }
     //validar fecha nacimiento 
     let res=false;
     const fechaNaci = document.getElementById('fechaNacimiento').value;

     let msgeror=document.getElementById('error3');
     let nacimientoDate= new Date(fechaNaci);
     let hoy = new Date;
     let año=hoy.getFullYear()-nacimientoDate.getFullYear();
     let mes=(hoy.getMonth())+1;
     let dia=hoy.getDate();
   
     if(año>18){
      res=true;
      if(res==false){
        event.preventDefault();
        msgeror.classList.add('error');
        msgeror.innerHTML='No eres mayor de edad';
        event.preventDefault();
      }
        console.log('primer if mayor de 18');
     }

      if(año==18 && mes>=(nacimientoDate.getMonth()+1) && dia>=nacimientoDate.getDate()){

      }

      if(año==18 && mes>=(nacimientoDate.getMonth()+1) && dia<nacimientoDate.getDate()){
       msgeror.classList.add('error');
       msgeror.innerHTML='No eres mayor de edad';
        event.preventDefault();
      }

      //validar DNI

     let dni= document.getElementById('tipoDoc').value;
     const RGEXDni=/^[1-9]{8}[A-Z]{1}$/;
     let validarDni=RGEXDni.test(dni);

     if(validarDni==false){
       let msgeror=document.getElementById('error4');
       msgeror.classList.add('error');
       msgeror.innerHTML='No eres mayor de edad';
        event.preventDefault();

     }
            
});