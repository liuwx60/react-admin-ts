import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080/admin/';

axios.interceptors.request.use(
  config => {
    return  config;
  },
  error => {
    return  Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return  response;
  },
  error => {
    if (!error.response) {
      return  Promise.reject(error.response);
    }

    switch (error.response.status) {
      case 401:
        alert(401);
        break;
      case 400:
        alert(error.response.message);
        break;
      case 500:
        alert('服务器出错');
        break;
      default:
    }

    return;
  }
);

export default axios;