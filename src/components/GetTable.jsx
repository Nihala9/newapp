import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const GetTable = () => {
  var [user, setuser] = useState([])
  
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data)
      setuser(response.data)
  })
  return (
      <div>
          <TableContainer component={Paper}>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Username</TableCell>
                          <TableCell>City</TableCell>
                          <TableCell>Email</TableCell>
                      </TableRow>
                  </TableHead>
          <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                  <TableCell>{val.email}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
              </Table>
      </TableContainer>
    </div>
  )
}

export default GetTable
