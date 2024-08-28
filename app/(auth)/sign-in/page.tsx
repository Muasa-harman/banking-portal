import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h3>Please Sign In</h3>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      <span>Forgot <li>Password</li>?</span>
      <span>Sign In</span>
      </form>
      <span>Sign Up</span>
    </div>
  )
}

export default SignIn