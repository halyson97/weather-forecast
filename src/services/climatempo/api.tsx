import axios from 'axios';

import config from '../../config/config';

const instance = axios.create({
  baseURL: config.climatempo.url,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export default instance;
