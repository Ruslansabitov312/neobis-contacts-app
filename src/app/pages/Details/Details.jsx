import Form from '../../components/Form/Form'
import React, { useEffect } from 'react'
import Wrapper from '../../components/Wrapper/Wrapper'
import './Details.sass'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Details = () => {
  const [contact, setContact] = useState([])
  const params = useParams()
  const [data] = useSelector((state) =>
    state.contacts.allContacts.filter((item) => +item.id === +params.id)
  )

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Wrapper>
      <div className='details__wrapper'>
        <div className='details__ava'>
          <img src={data.image} className='details__ava-item' alt='ava' />
        </div>

        <Form {...data} />
      </div>
    </Wrapper>
  )
}

export default Details
