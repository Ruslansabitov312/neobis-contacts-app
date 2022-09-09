import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './app/components/Layout/Layout'
import Details from './app/pages/Details/Details'
import Home from './app/pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
