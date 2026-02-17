
// fetch('https://yesno.wtf/api')
//  .then(resesponse =>resesponse.json())
//  .then(data => console.log(data))
//  .catch(err => console.error(err))

// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(function(response) {
//     // Transforma la respuesta. En este caso lo convierte a JSON
//     return response.json();
//   })
//   .then(function(json) {
//     // Imprimo por consola
//     console.log(json)
//   });

// async function hacerPeticion() {
//   // Realiza la petición
//   const miFetch = await fetch('https://yesno.wtf/api');
//   // Transforma la respuesta. En este caso lo convierte a JSON
//   const json = await miFetch.json();

//     const datos=document.getElementById('datos');

//     datos.innerHTML=  `<p>Respuesta: ${json.answer}</p>
//                           <img src="${json.image}" alt="${json.answer}">`;
    
// }

// hacerPeticion();*/

// https://pokeapi.co/api/v2/pokemon/
 const datos=document.getElementById('datos');

const baseURL = ' https://pokeapi.co/api/v2/pokemon/';       // Ruta del endpoint 

const params = new URLSearchParams();        // Creamos un objeto para los parámetros 

  
https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
params.set('offset', 'limit');              // Primer parámetro: filtro de búsqueda 

// params.set('page', 2);                      //Segundo parámetro: número de página (paginación) 

  

const urlFinal = `${baseURL}?${params.toString()}`;  //Construimos la URL final 



fetch(urlFinal)                             // Llamamos al API con fetch 

  .then(res => res.json())                  //  Convertimos la respuesta a JSON 

  .then(data => {

   data.results.forEach(item =>{

    datos.innerText =  `${item.name}`} )
   }  ); //Mostramos los datos en consola 

// const salida=document.getElementById('datos');

// salida.innerHTML=`<p>Respuesta: ${data.name}</p>`;

