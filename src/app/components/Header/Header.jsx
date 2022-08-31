import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.sass"

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <img src='./img/Frame.svg' alt='logo' />
        <h1 className='title'>MyContacts</h1>
      </Link>
    </header>
  )
}

export default Header
