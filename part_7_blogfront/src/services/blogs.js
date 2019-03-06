import axios from 'axios'
const baseUrl = '/api/blogs'

let authHeader = null

const setToken = token => {
  authHeader = { authorization: `bearer ${token}` }
}

const getOne = async id => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const response = await axios({
    method: 'post',
    url: baseUrl,
    data: newObject,
    headers: authHeader
  })
  return response.data
}

const update = async (id, newDetails) => {
  const response = await axios({
    method: 'put',
    url: `${baseUrl}/${id}`,
    data: newDetails,
    headers: authHeader
  })
  return response.data
}

const remove = async ({ id }) => {
  const response = await axios({
    method: 'delete',
    url: `${baseUrl}/${id}`,
    headers: authHeader
  })
  return response.data
}

export default { getOne, getAll, create, setToken, update, remove }
