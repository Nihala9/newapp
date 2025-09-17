import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics= ()=> {
    var [a, seta] = useState("Nihala")    
    var [b, setb] = useState()
    
    // function
    const ChangeName = (e) => {
        console.log(e.target.value)
        seta(e.target.value)
    }
    const DisplayName = (e) => {
        setb(a)
        }
    
  return (
    <div>
          <h1>Welcome {b}</h1>
          <TextField variant='outlined' onChange={ChangeName} /><br /><br />
          <Button variant='contained' onClick={DisplayName}>Show</Button>
    </div>
  )
}

export default StateBasics
