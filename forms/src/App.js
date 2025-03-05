import React from 'react'
import Navbar1 from './Components/Navbar/navbar'
import Signup from './Pages/signup/signup'
import Login from './Pages/login/login'
import Dashboard from './Components/Dashboard/dashboard'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login elem={<Dashboard/>}/>}/>
      </Routes>
    </div>
  )
}

export default App