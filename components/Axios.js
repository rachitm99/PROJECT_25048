import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://www.aumnix.com:7990'
})

export default instance