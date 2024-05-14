import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + 'login', {
      email: user.email,
      password: user.password
    });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  async register(user) {
    return axios.post(API_URL + 'register', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
    