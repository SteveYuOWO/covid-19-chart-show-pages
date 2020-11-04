import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export default http