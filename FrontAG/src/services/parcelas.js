import axios from 'axios';
const baseUrl = 'http://localhost/api/parcelas';

const getCount = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getCount }

