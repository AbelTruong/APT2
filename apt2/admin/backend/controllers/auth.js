import ResponseHandler from '../helpers/responseHandler.js'

export default {
  login: async (req, res) => {
    try {
      let data = 'OKE nhoa an. Products'
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  logout: async (req, res) => {
    try {
      let data = 'OKE nhoa an. Products'
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  register: async (req, res) => {
    try {
      let data = 'OKE nhoa an. Products'
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  refreshToken: async (req, res) => {
    try {
      let data = 'OKE nhoa an. Products'
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
