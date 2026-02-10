import axios from 'axios';

const baseUrl = 'http://localhost/api/explotaciones';
const baseUrl1 = 'http://localhost/api/explotaciones/resumen';

//con el get traemos todos los datos del response del controlador de la API
const getCount = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getResumen = () => {
  const request = axios.get(baseUrl1)
  return request.then(response => response.data)
}


export default { getCount, getResumen}


