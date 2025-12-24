import BaseService from './base.service'

class AuthService extends BaseService {
  constructor() {
    super() // wajib, untuk init $http dari BaseService
  }

  login(credential) {
    return this.$http
      .post(`${this.$app.api_url}auth/login`, credential)
      .then((response) => response)
      .catch(({ response }) => response)
  }

  register(credential) {
    return this.$http
      .post(`${this.$app.api_url}auth/register`, credential)
      .then((response) => response)
      .catch(({ response }) => response)
  }
  verifyEmail(token, code) {
    return this.$http.post(`${this.$app.api_url}auth/verify`, { token, code })
  }
}

export default new AuthService()
