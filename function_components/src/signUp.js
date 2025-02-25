import React, { useState } from 'react'
import "./signUp.css"
const SignUp = () => {
  const [login,setlogin]=useState(false)
  function Login(){
    setlogin(!login)
  }
  const [signUp,setSignUp]=useState(false)
  function Sign(){
    setSignUp(!signUp)
  }
  return (
    <div id="Navbar">
        <h1>Navbar</h1>
        <div>
            <button onClick={Sign}>signup</button>
            {signUp && 
            <div>
                <input type="name" placeholder='name here'/>
                <input type="email" placeholder='email here'/>
                <input type='password' placeholder='password here'/>
                <input type='password' placeholder='confirmpassword here'/></div>
            }
            <button onClick={Login}>login</button>
            {login && <div>
                <input type="email" placeholder='email here'/>
                <input type='password' placeholder='password here'/>
            </div>
            }
        </div>
    </div>
  )
}

export default SignUp