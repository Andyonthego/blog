import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button>Login</button>
        <span>Don't have an account? Register <a href='/register'>here</a>.</span>
      </form>
    </div>
  )
}

export default Login