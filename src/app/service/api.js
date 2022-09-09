import axios from 'axios'

export async function fetchData() {
  let dataC = {}
  const { data } = await axios
    .get(`https://my-json-server.typicode.com/RomanChasovitin/demo-api/users`)
    .then(({ data }) => (dataC = data.data))
    .catch((e) => console.log(e))
  return dataC
}
