import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'http://50.19.59.67',
});

export default apiBaseUrl;
