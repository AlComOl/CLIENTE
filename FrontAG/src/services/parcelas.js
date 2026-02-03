import axios from 'axios';
const baseUrl = 'http://localhost/api/parcelas';

const getCount = () => axios.get(`${baseUrl}`).then(res => res.data.total)

export default { getCount }