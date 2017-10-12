import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

class AuthApi {
  constructor() {
    this.baseUrl = '/auth';
  }

  signinGoogle(code) {
    return axios.post(`${this.baseUrl}/google/callback?code=${code}`);
  }
}

export const Auth = new AuthApi();
