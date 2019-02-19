import axios from 'axios'
const baseUrl = '/api/blogs'

let authHeader = null

const setToken = token => {
  authHeader = { authorization: `bearer ${token}` }
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async ({ newObject }) => {
  const response = await axios({
    method: 'post',
    url: baseUrl,
    data: newObject,
    headers: authHeader
  })

  return response.data
}

export default { getAll, create, setToken }
