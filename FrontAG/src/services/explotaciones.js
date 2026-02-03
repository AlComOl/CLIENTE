import axios from 'axios';


// const baseUrl = 'http://localhost/explotaciones';
// const baseUrl = '/api/explotaciones';

const baseUrl = 'http://localhost/api/explotaciones';






const getCount = () => axios.get(`${baseUrl}`).then(res => res.data.total)

export default { getCount }
