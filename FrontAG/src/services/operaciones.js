import axios from 'axios'

const baseUrl = 'http://localhost/api'

const postCrear = (formData) => {
    return axios.post(`${baseUrl}/operaciones/crear`, formData)
        .then(res => res.data)
}

export default { postCrear }