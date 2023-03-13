import axios from 'axios';

const client = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: "http://localhost:5000/api",
    headers: {
        'Content-Type': 'application/json'
    }
})
export default client