import axios from 'axios'

const API_URL = 'http://localhost:3000/'

class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + 'login', {
      email: user.email,
      password: user.password
    })
    if (response.data.token) {
      const userResponse = await axios.get(API_URL + `users/${response.data.userId}`, {
        headers: {
          Authorization: `Bearer ${response.data.token}`
        }
      })
      const userData = { ...response.data, ...userResponse.data }
      localStorage.setItem('user', JSON.stringify(userData))
      return userData
    }
    return response.data
  }

  async register(user) {
    return axios.post(API_URL + 'register', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })
  }

  logout() {
    localStorage.removeItem('user')
  }

  async update(user) {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    return axios.put(
      API_URL + `users/${currentUser.userId}`,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      },
      {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      }
    )
  }
}

export default new AuthService()
