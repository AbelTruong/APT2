import axios from 'axios'

const BACKEND_URL = 'http://localhost:5000'

const apiCaller = async (endpoint, method = 'GET', data = undefined, extraHeaders = undefined) => {
  try {
    const config = {
      url: BACKEND_URL + `/api${endpoint}`,
      method: method || 'GET',
      headers: {
        ...(extraHeaders || {}),
      },
      data,
    }

    const res = await axios(config).then((res) => res.data)
    return res
  } catch (error) {
    throw error
  }
}

export default apiCaller
