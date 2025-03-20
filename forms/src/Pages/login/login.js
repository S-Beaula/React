import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate=useNavigate()
  const [LoginDetails, setLoginDetails] = useState({ email: "", password: "" })
  console.log(LoginDetails);

  const handleLoginDetails = (e) => {
    setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("Users"))
    const LoginUserData = LoginDetails;
    const userFound = allUsers.find(x => x.email === LoginUserData.email && x.password === LoginUserData.password)


    if (userFound) {
      alert("login successfully")
      localStorage.setItem("LoggedUser",JSON.stringify(userFound))
      setLoginDetails({ email: "", password: "" })
      navigate("/dashboard")
    }
    else {
      alert("Invalid Credentials")
    }

  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type='email' placeholder='email here' name='email' onChange={handleLoginDetails} value={LoginDetails.email} />
        <input type='password' placeholder='password here' name='password' onChange={handleLoginDetails} value={LoginDetails.password} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login