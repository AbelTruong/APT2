import apiCaller from '../helpers/apiCaller.js'

const SubmitApi = {
  submit: async () => {
    return await apiCaller(`/submit`)
  },
}

export default SubmitApi
