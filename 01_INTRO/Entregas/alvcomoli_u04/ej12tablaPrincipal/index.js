function ventanaPrincipal(){

    let id=document.getElementById('titulo');

    id.innerHTML="<h1>TAREA 03</h1>";

   

    const plantilla = 
    
        `<form id="formulario">

            <label for="usuario">Introuzca el nombre de usuario
            <input type="text" id="usuario" required><br><br>

            <label for="usuario">Introduzca DIA de nacimiento
            <input type="text" id="diaNacimiento" required><br><br>

            <label for="usuario">Introduzca MES de nacimiento
            <input type="text" id="mesNacimiento" required><br><br>

            <label for="usuario">Introduzca AÑO de nacimiento.
            <input type="text" id="anoNacimiento" required><br><br>

            <button type="submit" name="">Enviar</button>


        </form>`

        let f = document.getElementById('preguntas');

        f.innerHTML= plantilla;


    const envio = document.getElementById('preguntas');


    envio.addEventListener('submit',procesarPreguntas);







}

function procesarPreguntas(event){

    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const dia  = Number(document.getElementById('diaNacimiento').value);
    const mes = Number(document.getElementById('mesNacimiento').value);
    const ano = Number(document.getElementById('anoNacimiento').value);

    let caracteres=usuario.length;
    let primera;
     for(let i=0;i<usuario.length;i++){
            if(usuario[i]==='A'||usuario[i]==='a'){primera=i+1;break;} 
     }

     let ultima;
     for(let z=usuario.length-1;z>=0;z--){
                   if(usuario[z]==='A'|| usuario[z]==='a'){ ultima=z+1;break;} 

     }

    let menos3=usuario.split('');
    let cortado=menos3.splice(0,3);
    let res=cortado.join('');

    let mayusculas=usuario.toUpperCase();

    function edad(dia,mes,ano){
        let hoy = new Date();
        let nacimiento = new Date(ano, mes - 1, dia);       
        let años = hoy.getFullYear() - nacimiento.getFullYear();

        if (hoy.getMonth() > nacimiento.getMonth()) { // hoy > nacimiento
   
            return años;

        } else if (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() >= nacimiento.getDate()) {
            // si es el mismo mes y el dia es mayor o igual que el de nacimiento
            return años;
        } else {
            //aun no he llegado el cumpleaños quito 1 
            return años - 1;
        }
   
   
    }

  
        let nacimiento1 = new Date(ano, mes - 1, dia);       
        
        let angulo = 180; // en grados
        let radianes = angulo * Math.PI / 180; // convertir a radianes
        let coseno = Math.cos(radianes);
       

    
   
   
    let salidaEdad=edad(dia,mes,ano);


    let numeros=[34,67,23,75,35,19];

    let mayor=Math.max(...numeros);

    let azar= Math.random();

    

    





    ///Datos procesados Alvaro

    const datos=`<h2><Buenos días ${usuario}</h2>
                    <h4>Tu nombre tiene ${caracteres} caracteres, incluidos espacios.</h4>
                    <h4>La primera letra A de tu nombre está en la posición: ${primera}</h4> 
                    <h4>La última letra A de tu nombre está en la posición: ${ultima}</h4>
                    <h4>Tu nombre menos las 3 primeras letras es: ${res}</h4>
                    <h4>Tu nombre todo en mayúsculas es: ${mayusculas} </42>
                    <h4>Tu edad es: ${salidaEdad} años.</h4>
                    <h4>Naciste un feliz ${dia} del año ${ano} .</h4>
                    <h4>El coseno de 180 es: ${coseno}</h4>
                    <h4>El número mayor de (34,67,23,75,35,19) es: ${mayor}</42>
                    <h4>Ejemplo de número al azar: ${azar} </h4>
                    <p style="text-align: right; font-size: 0.5em; color: #555;">Valencia ❤️ Made in love 14-11-2025</p>`
                    

   let salida=document.getElementById('datos');

   salida.innerHTML=datos;


}

document.addEventListener('DOMContentLoaded', ventanaPrincipal);

