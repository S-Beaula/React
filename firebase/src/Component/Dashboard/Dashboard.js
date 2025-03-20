import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import {author} from '../../formsConfig'
import {signOut} from 'firebase/auth'
const Dashboard = () => {
    const navigate=useNavigate()
    const logout=()=>{
        signOut(author)
        alert("Logout successfully")
        navigate('/login')
    }
  return (
    <div>
        Welcome to Dashboard
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard