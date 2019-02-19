import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async ({ newObject, headers }) => {
  const response = await axios({
    method: 'post',
    url: baseUrl,
    data: newObject,
    headers: headers
  })

  console.log(response.data)

  return response.data
}

export default { getAll, create }
