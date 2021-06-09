import axios from 'axios'

const api = axios.create({
    baseURL: "https://behair.herokuapp.com"
})

export default api
