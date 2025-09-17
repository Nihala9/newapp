import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
          <h2>Sign Up</h2>
          <TextField label="Name" variant='outlined' /><br /><br />
          <TextField label="Email" type='email' variant='outlined' /><br /><br />
          <TextField label="Password" type='password' variant='outlined' /><br /><br />
          <Button variant='text'>Register</Button><br /><br/>
          Already have an account?<a href="">Login</a><br /><br />
          <hr /><br />
          <Button variant='outlined'>Sign up with Google</Button><br /><br />

    </div>
  )
}

export default Signup
