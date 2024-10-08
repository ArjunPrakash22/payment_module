import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login-div'>
        <div class="logo text-center">
  <h1>Logo</h1>
</div>
<div class="wrapper">
  <div class="inner-warpper text-center">
    <h2 class="title">Login to your account</h2>
    <form action="" id="formvalidate">
      <div class="input-group">
        <label class="palceholder" for="userName">User Name</label>
        <input class="form-control" name="userName" id="userName" type="text" placeholder="" />
        <span class="lighting"></span>
      </div>
      <div class="input-group">
        <label class="palceholder" for="userPassword">Password</label>
        <input class="form-control" name="userPassword" id="userPassword" type="password" placeholder="" />
        <span class="lighting"></span>
      </div>

      <button type="submit" id="login">Login</button>
      <div class="clearfix supporter">
        <div class="pull-left remember-me">
          <input id="rememberMe" type="checkbox"/>
          <label for="rememberMe">Remember Me</label>
        </div>
        <a class="forgot pull-right" href="#">Forgot Password?</a>
      </div>
    </form>
  </div>
  <div class="signup-wrapper text-center">
    <a href="#">Don't have an accout? <span class="text-primary">Create One</span></a>
  </div>
</div>
    </div>
  )
}

export default Login