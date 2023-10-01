import ResponseHandler from '../helpers/responseHandler.js'

export default {
  get: async (req, res) => {
    try {
      let data = 'OKE nhoa an. Products'
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
