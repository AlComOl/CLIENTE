import axios from 'axios'
const baseUrl = 'http://localhost:3009/api/notes'
// ESTA dev/api no requiere el token de autenticación
//const baseUrl = 'http://localhost:3009/dev/api/notes'

let token = null
const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newObject, config)  
return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, setToken }