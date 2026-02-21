
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
//  const datos=document.getElementById('datos');

// const baseURL = ' https://pokeapi.co/api/v2/pokemon/';       // Ruta del endpoint 

// const params = new URLSearchParams();        // Creamos un objeto para los parámetros 

  
// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
// params.set('offset', 'limit');              // Primer parámetro: filtro de búsqueda 

// // params.set('page', 2);                      //Segundo parámetro: número de página (paginación) 

  

// const urlFinal = `${baseURL}?${params.toString()}`;  //Construimos la URL final 



// fetch(urlFinal)                             // Llamamos al API con fetch 

//   .then(res => res.json())                  //  Convertimos la respuesta a JSON 

//   .then(data => {

//    data.results.forEach(item =>{
//     console.log(item.name)
//     datos.innerHTML +=`<p>${item.name}</p>`} )
//    }  );



const baseURL = 'https://es.wikipedia.org/w/api.https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json&origin=*';       // Ruta del endpoint 

// const params = new URLSearchParams();        // Creamos un objeto para los parámetros 

  

// params.set('Nelson', 'Mandela');              // Primer parámetro: filtro de búsqueda 

// params.set('page', '*');                      //Segundo parámetro: número de página (paginación) 

  

// const urlFinal = `${baseURL}?${params.toString()}`;  //Construimos la URL final 

  

// fetch(baseURL)                             // Llamamos al API con fetch 

//   .then(res => res.json())                  //  Convertimos la respuesta a JSON 

//   .then(data => console.log(data)); //Mostramos los datos en consola 


// const busqueda=document.getElementById("textoBusqueda").value;

// async function hacerPeticion(busqueda) { 
// const baseURL = "https://es.wikipedia.org/w/api.php";
 
// const params = new URLSearchParams();

// params.set("action","query");
// params.set("list","search");
// params.set("srsearch",busqueda);
// params.set("utf8","");
// params.set("format","json");
// params.set("origin","*");

// try{

//    const urlFinal=await fetch(`${baseURL}?${params.toString()}`);


// if (!urlFinal.ok) throw new Error("Error en la red");

//     const json = await urlFinal.json();
//     console.log(json.query.search);

// }catch(error){
//   console.error("Hubo un fallo:", error);
// }

//      } 
 

// hacerPeticion(busqueda); .userId

const resu=document.getElementById('resultado');





// fetch('https://jsonplaceholder.typicode.com/posts')
//  .then (res=>res.json())
//  .then (datos =>{
//   datos.forEach(element => {
//     resu.innerHTML+= `<p>${element.title}</p>`;
//   });
// });


async function salida() {

  const  res = await 
  fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();

    data.forEach(element => {
      resu.innerHTML += `<p>${element.title}<p>`;
      
    });
}

salida();