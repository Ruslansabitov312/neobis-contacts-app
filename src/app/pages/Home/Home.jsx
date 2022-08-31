import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
// import { fetchData } from '../../service/api'
import './Home.sass'

const fetchData = async () => {
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

const Home = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/RomanChasovitin/demo-api/users`)
      .then(({ data }) => setContacts(data.data))
    console.log(contacts)
  }, [])

  return (
    <main className='container'>
      <section className='section'>
        <div className='card-wrapper'>
          {contacts.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
