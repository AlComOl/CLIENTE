import axios from 'axios';
const baseUrl = 'http://localhost/api/parcelas';
const baseUrl1 = 'http://localhost/api/parcelas/resumen';

const getCount = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getResumenP = () => {
  const request = axios.get(baseUrl1)
  return request.then(response => response.data)
}

export default { getCount ,getResumenP }

