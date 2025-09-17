import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import GetTable from './components/GetTable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(2004)

  return (
    <>
      <NavBar />
      <p style={{ marginBottom: 50 }}></p>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Signup />} />
        <Route path='/tb' element={<GetTable />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/btn' element={<Buttons />} />
        <Route path='/card' element={<Product/>} />
      </Routes>
      
    </>
  )
}

export default App
