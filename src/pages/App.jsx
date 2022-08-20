import React from 'react'

import './app.scss'
import LoginPage from './login/LoginPage'

const App  = () => {
  return (
    <div className='app'>
        { <LoginPage/> }
    </div>
  )
}

export default App