import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Card from "../../components/Card/Card"
import { getContacts } from "../../redux/contactsSlice"
import { fetchData } from "../../service/api"
import "./Home.sass"

const Home = () => {
  const [contacts, setContacts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData().then((data) => {
      setContacts(data)
      dispatch(getContacts(data))
    })
  })

  return (
    <main className="container">
      <section className="section">
        <div className="card-wrapper">
          {contacts.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
