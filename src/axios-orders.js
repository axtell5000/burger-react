import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-6f5b6.firebaseio.com/'
});

export default instance;
