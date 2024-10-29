import axios from 'axios';

// Create an Axios instance with a base URL
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // TMDb API base URL
});

export default instance;