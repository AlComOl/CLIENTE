document.getElementById('boton').onclick=function(){

fetch('https://yesno.wtf/api')
  .then(function(response) {
    // Transforma la respuesta. En este caso lo convierte a JSON
    return response.json();
  })
  .then(function(json) {
    // Imprimo por consola
    // console.log(json)

     let salida= document.getElementById('salida');
      salida.innerHTML=json.answer;

    //  let salida= document.getElementById('salida');
    //  salida.innerHTML=json.forced;

    // let salida= document.getElementById('salida');
    //  salida.innerHTML= `<img src="${json.image}"></img>`;

    
  });
};