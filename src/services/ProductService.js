import axios from 'axios'

// This file to centralize the whole axios requests
const apiClient = axios.create({
  baseURL: `https://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// function getProducts to use everywhere you need to access mock DB
export default {
  getProducts() {
    return apiClient.get('/products')
  }
}