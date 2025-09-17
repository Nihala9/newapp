import { Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          
          Username: <input type="text" id="uname" /> <br/><br/>
          Password: <input type="password" id="pwd" /><br /><br />
          <a href='https://media.makeameme.org/created/forgot-password-goodbye.jpg'>Forgot password?</a><br/><br/>
          <Button variant='contained'>Login</Button>
      </div>  
  )
}

export default Login
