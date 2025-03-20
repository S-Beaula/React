import React from 'react'
import {Navigate} from "react-router-dom"
const Prroutes = ({element}) => {
    const loggedInUser=JSON.parse(localStorage.getItem("LoggedUser"))
  return (
    <div>
       {loggedInUser ? element : <Navigate to="/login"/>}
    </div>
  )
}

export default Prroutes