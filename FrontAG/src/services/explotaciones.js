import axios from 'axios';


// const baseUrl = 'http://localhost/explotaciones';
// const baseUrl = '/api/explotaciones';

const baseUrl = 'http://localhost/api/explotaciones';


//con el get traemos todos los datos del response del controlador de la API
const getCount = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data.total)
}

export default { getCount }
