import React from 'react'
import './Card.sass'

const Card = ({
  id,
  city,
  country,
  email,
  firstname,
  image,
  lastname,
  phoneNumber,
  website,
}) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={image} alt='ava' className='image' />
      </div>

      <div className='card__content'>
        <h1 className='card__name'>
          {firstname} {lastname}
        </h1>
        <h3 className='card__location'>
          {city}, {country}
        </h3>
        <h3 className='card__phone'>{phoneNumber}</h3>
        <h3 className='card__site'>{website}</h3>
        <h3 className='card__email'>{email}</h3>

        <div className='card__button'>
          <button className='button'>show</button>
        </div>
      </div>
    </div>
  )
}

export default Card
