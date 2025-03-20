import React, { useEffect, useState } from 'react'
import SignUp from './Component/Signup/SignUp'
import Login from './Component/Login/Login'
import Navbar1 from './Component/Navbar/Navbar'
import Dashboard from './Component/Dashboard/Dashboard'
import {Routes,Route,Navigate} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {author} from './formsConfig'
const App = () => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const userLoggedIn=onAuthStateChanged(author,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return()=>userLoggedIn()
  },[])
  console.log(user);
  
  if(loading){
    return <h1>Loading please wait a moment!!!</h1>
  }
  return (
    <div>
    <Navbar1/>
     <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to={'/login'}/>}/>
     </Routes>
    </div>
  )
}

export default App