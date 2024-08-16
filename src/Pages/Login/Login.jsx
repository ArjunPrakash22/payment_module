import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login-div'>
        <form className='login-form' method='POST'>
            <input className='login-input' type="text" placeholder='Mobile number' />
            <input className='login-input' type="password" placeholder='Password'/>
            <button className='login-btn' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login