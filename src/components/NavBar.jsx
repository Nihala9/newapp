import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
          <IconButton size='large' edge='start'></IconButton>
          
          <h3 >Pookie</h3> &nbsp;&nbsp;&nbsp;
          <Link to="/login"><Button variant='contained'>LOGIN</Button>
          </Link>&nbsp;
          <Link to="/"><Button variant='contained'>SIGN UP</Button></Link> &nbsp;
          <Link to="/tb"><Button variant='contained'>TABLES</Button></Link>&nbsp;
          <Link to="/state"><Button variant='contained'>STATES</Button></Link>&nbsp;
          <Link to="/count"><Button variant='contained'>COUNTER</Button></Link>&nbsp;
          <Link to="/btn"><Button variant='contained'>BUTTONS</Button></Link>&nbsp;
          <Link to="/card"><Button variant='contained'>PRODUCTS</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>
      </div>
      
  )
}

export default NavBar
