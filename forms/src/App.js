import React from 'react'
import Navbar1 from './Components/Navbar/navbar'
import Signup from './Pages/signup/signup'
import Login from './Pages/login/login'
import Dashboard from './Components/Dashboard/dashboard'
import Prroutes from './Components/Protectedroutes/prroutes'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/dashboard' element={<Prroutes  element={<Dashboard/>}/> }/>
      </Routes>
    </div>
  )
}

export default App