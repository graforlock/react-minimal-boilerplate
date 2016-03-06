import Fetch from 'whatwg-fetch';
const baseUrl = 'http://localhost:8080';

const service = {
  get: (url) => fetch(baseUrl + url).then(response => response.json()),
  post: (url) => {}
};

export default service;
