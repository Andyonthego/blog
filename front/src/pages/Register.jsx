import React from 'react'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username'/>
        <input required type='email' placeholder='email'/>
        <input required type='password' placeholder='password'/>
        <button>Register</button>
        <span>Alreacy have an account? Login <a href='/Login'>here</a>.</span>
      </form>
    </div>
  )
}

export default Register