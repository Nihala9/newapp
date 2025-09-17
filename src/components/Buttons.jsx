import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Buttons = () => {
    var [n, set] = useState()
    useEffect(() => {
        b()
    },[])
    const a = () => set("React")
    const b = () => set("Angular")
    const c = () => set("Vue")
    
  return (
      <div>
          <h1>Welcome {n}</h1>
          <Button variant='contained' color="info" onClick={a}>React</Button>&nbsp;
          <Button variant='contained' color="secondary" onClick={b}>Angular</Button>&nbsp;
          <Button variant='contained' color="warning" onClick={c}>Vue</Button>
    </div>
  )
}

export default Buttons
