import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [n, setn] = useState(0)
    
    const inc =() => setn(n+1)
    const dec =() => setn(n-1)
    
  return (
      <div>
          <Button variant='contained' color='error' onClick={dec} >-</Button>&nbsp;&nbsp;
          <text>{n}</text>&nbsp;&nbsp;
          
          <Button variant='contained' color='success' onClick={inc}>+</Button>
    </div>
  )
}

export default Counter
