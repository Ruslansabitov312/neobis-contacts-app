import React from 'react'
import { Link } from 'react-router-dom'
import './Card.sass'

const Card = ({
  id,
  city,
  country,
  email,
  firstName,
  image,
  lastName,
  phoneNumber,
  website,
}) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={image} alt='ava' className='card__image-item' />
      </div>

      <div className='card__content'>
        <div className="card__title">
          <h1 className='card__title-name'>{firstName} {lastName}</h1>
          <img src="./img/heart.svg" alt="heart" className="card__title-icon" />
        </div>

        <div className='card__info'>
          <div className='card__location'>
            <img
              src='./img/location.svg'
              alt='location'
              className='card__location-icon'
            />
            <h3 className='card__location-title'>
              {city}, {country}
            </h3>
          </div>

          <div className='card__phone'>
            <img
              src='./img/smartphone.svg'
              alt='phone'
              className='card__phone-icon'
            />
            <h3 className='card__phone-title'>{phoneNumber}</h3>
          </div>

          <div className='card__website'>
            <img
              src='./img/internet.svg'
              alt='website'
              className='card__website-icon'
            />
            <h3 className='card__website-title'>{website}</h3>
          </div>

          <div className='card__email'>
            <img
              src='./img/email.svg'
              alt='email'
              className='card__email-icon'
            />
            <h3 className='card__email-title'>{email}</h3>
          </div>
        </div>

        <button className='card__button'>
          <Link to={`/details/${id}`} className='card__button-link'>
            show
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Card
