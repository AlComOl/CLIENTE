
//valida nombre

function validaNombre(){
    
     const name=document.getElementById('nombre').value;//la cagava con el value
     const nameRGEX=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/
     const validarNombre= nameRGEX.test(name);

      if(validarNombre==false){
        let msgeror=document.getElementById('error');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El nombre contiene caracteres invalidos o está vacio<strong>'; 

        return false;   
    }
    return true;
}
    //valida apellido1
function validarApellido1(){
     const apellido1=document.getElementById('1Apellido').value;
     const RGEXApellido1=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/ //la $ filtra hasta el final si no la pones y pones digitos se lo traga
     const validarApellido1= RGEXApellido1.test(apellido1);

      if(validarApellido1==false){
        let msgeror=document.getElementById('error1');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El 1º Apellido contiene caracteres invalidos o está vacio<strong>';  
        return false;  
    }

    return true;

}
  // valida apellido2 NO ES NECESARIO
function validarApellido2(){

     const apellido2=document.getElementById('2Apellido').value;
     const RGEXApellido2=/^[a-zA-ZÁÉÍÓÚáéíóúñü]+$/
     const validarApellido2= RGEXApellido2.test(apellido2);

      if(validarApellido2==false){
        let msgeror=document.getElementById('error2');
        msgeror.classList.add('error');
        msgeror.innerHTML='<strong>El 2º Apellido contiene caracteres invalidos o está vacio<strong>'; 

        return false;
    
      }
      return true
}
     //validar fecha nacimiento Mayor de edad 
     
function validarFechaNacimiento(){
     const fechaNaci = document.getElementById('fechaNacimiento').value;
    const msgeror = document.getElementById('error3');
    const nacimientoDate = new Date(fechaNaci);
    const hoy = new Date();

    let año = hoy.getFullYear() - nacimientoDate.getFullYear();
    let mes = hoy.getMonth()+1;
    let dia = hoy.getDate();
    let mesNacimiento = nacimientoDate.getMonth()+1;
    let diaNacimiento = nacimientoDate.getDate();

    let res = false;

    if(año > 18){
        res = true;
    } else if(año === 18){
        if(mes > mesNacimiento){
            res = true;
        } else if(mes === mesNacimiento){
            if(dia >= diaNacimiento){
                res = true;
            }
        }
    }

    if(!res){
        msgeror.classList.add('error');
        msgeror.innerHTML = 'No eres mayor de edad';
    }

    return res;


   }
      

      //validar DNI
function validarDni(){
     let dni= document.getElementById('nDoc').value;
     const RGEXDni=/^[0-9]{8}[A-Z]{1}$/;
     let validarDni=RGEXDni.test(dni);
     console.log(dni);
     console.log(validarDni);
     if(validarDni==false){
       let msgeror=document.getElementById('error4');
       msgeror.classList.add('error');
       msgeror.innerHTML='debe contener 9 digitos y una letra en Mayúscula';
     return false;

     }
     return true;
    }
//      //Validar Contraseña
     function validarContraseñas(){
     let contraseña = document.getElementById('contraseña').value;
     let REGEXContraseña =/^(?=.*[0-9])(?=.*[!@#%^&*]).{13,}$/
     console.log(contraseña);
     


     let validarContaseña=REGEXContraseña.test(contraseña);
     console.log(validarContaseña);
      if(validarContaseña==false){
        let msgeror=document.getElementById('error5');
        msgeror.classList.add('error');
        msgeror.innerHTML='debe contener  más de 12 caracteres y contener al menos un número y un símbolo de los siguientes: !@#%^&*'
       return false;
      }

     let contraseñaR = document.getElementById('contraseñaR').value;
     let REGEXContraseñaR =/^(?=.*[0-9])(?=.*[!@#%^&*]).{13,}$/
      //almenos 1 nuemro ,almenos una letra ,almenos uno de estos carateres y entotal 13 digitos
     let validarContaseñaR=REGEXContraseñaR.test(contraseñaR);

     
      if(validarContaseñaR==false){
        let msgeror=document.getElementById('error6');
        msgeror.classList.add('error');
        msgeror.innerHTML='debe contener  más de 12 caracteres y contener al menos un número y un símbolo de los siguientes: !@#%^&*'
       return false;
      }

      if(contraseñaR!==contraseña){
        let msgeror=document.getElementById('error7');
        msgeror.classList.add('error');
        msgeror.innerHTML='Las contraseñas deben de coincidir';
      return false;
      }

      return true;
}

      //Validar Numero de soporte/

function validarNumeroSoporte(){
        let numSoporte= document.getElementById('numSoporte').value;
        let REGEXnumSoporte=/^.+$/;
        let validacionNumSoporte=REGEXnumSoporte.test(numSoporte);
     
        if(validacionNumSoporte==false){
          let msgeror=document.getElementById('error8');
          msgeror.classList.add('error');
          msgeror.innerHTML='El campo no puede estar vacio';
         return false;
        }
        return true;
}


//         //validar correos 


    
 function validarCorreos(){
    
        let correo= document.getElementById('correoEle').value;
        let REGEXCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // [...] conjunto de caracteres permitidos
        // ^ dentro de los corchetes  negación (significa todo menos)
        // \s  espacios
        // @  arroba
        //   uno o más caracteres
        let validaCorreo= REGEXCorreo.test(correo);
        
        if(validaCorreo==false){
          console.log('correo1'+validaCorreo);
          let msgeror=document.getElementById('error9');
          msgeror.classList.add('error');
          msgeror.innerHTML="El campo Correo electrónico debe cumplir con el formato de un email válido y no puede estár vacio";
        return false;
        }

         let correo1= document.getElementById('correoEleR').value;
   
        let validaCorreo1= REGEXCorreo.test(correo1);
        if(validaCorreo1==false){
          console.log('correo2'+validaCorreo);
          let msgeror=document.getElementById('error10');
          msgeror.classList.add('error');
          msgeror.innerHTML="El campo Correo electrónico debe cumplir con el formato de un email válido y no puede estár vacio";
        return false;
        }

         if(correo !== correo1){
          console.log(correo +" "+ correo1);
          console.log("diferentes"+ (correo !== correo1));
          let msgeror=document.getElementById('error11');
          msgeror.classList.add('error');
          msgeror.innerHTML="Los correos tienen que ser iguales";
         return false;
        }
        return true;
       
 }

function validarTelefono(){

        let telefono= document.getElementById('telefono').value;
        let REGEXtelefono=/^[6-9+]\d{8,}$/;
        // ^  inicio de la cadena
        // [6-9+]  el primer carácter debe ser 6, 7, 8, 9 o mas
        // \d{8,}  al menos 8 dígitos mas (para que en total sean al menos 9)
        // $  fin de la cadena
        
        let validatelefono=REGEXtelefono.test(telefono);
        if(validatelefono==false){
          let msgeror=document.getElementById('error12');
          msgeror.classList.add('error');
          msgeror.innerHTML="El campo “Teléfono móvil” tiene que tener al menos 9 dígitos. El primer número debe ser un 6, un 7, un 8, un 9 o un mas"
          return false;
       
        }
      }
        //declaraciones
        //value te da el contenido del input vs sin value(a pelo) el elemento completo como un ojeto
 function declaraciones(){
          let declaro=document.getElementById('declaro');//el value me da undefined en el checkbox
          console.log(declaro);
          let declaro1=document.getElementById('declaro1');
          if(!declaro.checked  && !declaro1.checked){
            console.log(declaro.checked);
            let msgeror=document.getElementById('error13');
            msgeror.classList.add('error');
            msgeror.innerHTML="Debe dar su consentimiento, en el apartado DECLARACIONES, al tratamiento de sus datos de carácter personal."
        return false;
          }
        return true;
 }
document.addEventListener('submit',(event)=>{

  if(!validaNombre()){
       event.preventDefault();
  }
  
  if(!validarApellido1()){
       event.preventDefault();
  }
  
  if(!validarApellido2()){
       event.preventDefault();
  }

  if(!validarDni()){
       event.preventDefault();
  }
  if(!validarFechaNacimiento()){
       event.preventDefault();
  }
  
  if(!validarContraseñas()){
       event.preventDefault();
  }
  
  if(!validarNumeroSoporte()){
       event.preventDefault();
  }
  if(!validarCorreos()){
    event.preventDefault;
  }
    if(!validarTelefono()){
       event.preventDefault();
  }
    if(!declaraciones()){
       event.preventDefault();
  }


 
});