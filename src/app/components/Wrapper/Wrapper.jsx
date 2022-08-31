import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <main className='container'>
      <section className='section'>{children}</section>
    </main>
  )
}

export default Wrapper
