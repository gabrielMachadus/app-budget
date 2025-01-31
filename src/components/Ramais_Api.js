import axios from 'axios';

const TOKEN_API = 'mQs9A7SdSfa42Dc9xbKSL0F9z2woGXD8iRUH3ubxuUJfcKvMWWLyHAHYqccb6WV7a';

const ramais_api = axios.create({
  baseURL:'https://omni03.espectra.com.br/app/api/integra',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'api-token': TOKEN_API,
  }
});

ramais_api.interceptors.request.use(config => {
  console.log('Headers enviados:', config.headers);
  return config;
});


export default ramais_api;
