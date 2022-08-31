import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/RomanChasovitin/demo-api/users`
    )
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
  }
}