import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    // baseURL: "file:///C:/Users/sylv/VueJsProjects/super-aerial-market",
    // baseURL: "https://drive.google.com/file/d/1bvm62C_s9oH38hIuClKeT-l2EOdFm7gi/view",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProducts() {
        return apiClient.get('/products')
    }
}