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
    const dia  = document.getElementById('diaNacimiento').value;
    const mes = document.getElementById('mesNacimiento').value;
    const ano = document.getElementById('anoNacimiento').value;

    let caracteres=usuario.length;


    ///Datos procesados

    const datos=`<h2><Buenos días ${usuario}</h2>
                    <h2>Tu nombre tiene ${caracteres} caracteres, incluidos espacios.</h2>
                    <h2>La primera letra A de tu nombre está en la posición:</h2>
                    <h2>La última letra A de tu nombre está en la posición: <X></h2>
                    <h2>Tu nombre menos las 3 primeras letras es: <XXXXXXXX></h2>
                    <h2>Tu nombre todo en mayúsculas es: <XXXXXXXX></h2>
                    <h2>Tu edad es: <XX> años.</h2>
                    <h2>Naciste un feliz <XXXX> del año <XXXX>.</h2>
                    <h2>El coseno de 180 es: <XXXXXXXX></h2>
                    <h2>El número mayor de (34,67,23,75,35,19) es: <XX></h2>
                    <h2>Ejemplo de número al azar: <XXXXXXXX></h2>;`

   let salida=document.getElementById('datos');

   salida.innerHTML=datos;


}

document.addEventListener('DOMContentLoaded', ventanaPrincipal);

