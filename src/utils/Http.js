import axios from 'axios';
import codeResponse from '@/utils/codeResponse';

const APP_API_URL = 'https://5f55a98f39221c00167fb11a.mockapi.io';
const DEFAULT_CONFIG = {
  baseURL: APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

export default class Http {
  constructor(config = {}) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);
  }

  get(url, params, config = {}) {
    return this.executeRequest(url, { ...config, params });
  }

  executeRequest(url, config) {
    const finalHeaderConfig = {
      ...this.config.headers,
      ...config.headers
    };

    const finalConfig = {
      ...this.config,
      url,
      ...config,
      headers: { ...finalHeaderConfig }
    };

    return axios.request(finalConfig)
      .then((response) => {
        let { data } = response;

        if (response.status === codeResponse.server_error) {
          window.location.href = '/not-found';
        }

        return Promise.resolve(data);
      }).catch(error => {
        console.error(error);

        return Promise.reject(error);
      });
  }
}


