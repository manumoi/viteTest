import React from 'react'
import './loginPage.scss'

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className="loginArea">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
        <form>
          <input type="text" placeholder='Email...' />
          <input type="password" placeholder='Password...' />
          <button>Login</button>
        </form>
        <span className="forgotPassword">Forgot your password...</span>
        <span className="errorLoginMsg">Your login/password doesn't match anything in our database. Please verify everything is correct.</span>
      </div>

    </div>
  )

}

export default LoginPage