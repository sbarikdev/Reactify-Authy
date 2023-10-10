
import axios from 'axios';
// export const API_URL = 'https://94lk8nb3-8000.inc1.devtunnels.ms/';
export const API_URL = 'http://127.0.0.1:8000/';

const token = localStorage.getItem('JWTtoken');

export const axiosInstance = axios.create({
    baseURL: API_URL, // Replace with your API endpoint
    // timeout: 5000, // Adjust the timeout as needed
    headers: {
        'Authorization': `${token}`, 
        'Content-Type': 'application/json', 
    },
})



