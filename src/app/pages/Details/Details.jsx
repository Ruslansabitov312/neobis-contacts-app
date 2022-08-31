import Form from '../../components/Form/Form'
import React from 'react'
import Wrapper from '../../components/Wrapper/Wrapper'
import './Details.sass'

const Details = () => {
  return (
    <Wrapper>
      <div className='details__wrapper'>
        <div className='details__ava'>
          <img src='./img/ava.png' alt='' />
        </div>

        <Form />
      </div>
    </Wrapper>
  )
}

export default Details
