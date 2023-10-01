import ResponseHandler from '../helpers/responseHandler.js'

export default {
  submit: async (req, res) => {
    try {
      console.log('\n submit: =>>')

      let data = { name: 'hung an' }

      console.log('data :>> ', data)

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
