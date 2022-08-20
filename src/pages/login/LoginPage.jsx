import React, { useState } from 'react'
import './loginPage.scss'

const LoginPage = () => {

  const [login, setLogin]=useState("")
  const [password,setPassword]=useState("")
  const [loginError, setLoginError] = useState(false)


  function handleLogin(e){
    e.preventDefault();
    // if (login === password)
    //   
    //  async function to check if login worked
    // if true, 
    // determine the user class
    // update the ui accordingly
    // if false
    // setLoginError(true)
    console.log(`login: ${login} password: ${password}`)
  }

  function handleEmailChanged(e){
    setLogin(e.target.value)
    setLoginError(false)
  }

  function handlePasswordChanged(e){
    setPassword(e.target.value)
    setLoginError(false)
  }


  return (
    <div className='loginPage'>
      <div className="loginArea">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
        <form>
          <input type="text" onChange={handleEmailChanged} placeholder='Email...' />
          <input type="password" onChange={handlePasswordChanged} placeholder='Password...' />
          <button id="login" onClick={handleLogin}>Login</button>
        </form>
          <span className="forgotPassword">Forgot your password...</span>
        <span style={{display:loginError?"block":"none"}} className="errorLoginMsg">Your login/password doesn't match anything in our database. Please verify everything is correct.</span>
      </div>

    </div>
  )

}

export default LoginPage