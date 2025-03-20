import React, { useState,useEffect} from 'react'
const Signup = () => {
    const [signUpDetails, setSignUpDetails] = useState({ name: "", email: "", password: "" })
    const [users,setUsers]=useState([])
    const handleDetails = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value })
    console.log(signUpDetails);

    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem("signUpUsers", JSON.stringify(signUpDetails))
    //     setSignUpDetails({ name: "", email: "", password: "" })
    // }
     
    useEffect(()=>{
        const storedUsers=JSON.parse(localStorage.getItem("users"))||[]
        setUsers(storedUsers)
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const allUsersDetails=[...users,signUpDetails]
        localStorage.setItem("Users",JSON.stringify(allUsersDetails))
        setUsers(allUsersDetails)
        setSignUpDetails({ name: "", email: "", password: "" })
        alert("Signup done successfully")
    }
    return (
        <div>
            {/* <form>
            <input type='name' placeholder='name here' name='name' onChange={(e)=>setSignUpDetails(e.target.value)}/>
            <input type='email' placeholder='email here' name='email' onChange={(e)=>setSignUpDetails(e.target.value)}/>
            <input type='password' placeholder='password here' name='password' onChange={(e)=>setSignUpDetails(e.target.value)}/>
            <button>Submit</button>
        </form> */}
            <form onSubmit={handleSubmit}>
                <input type='name' placeholder='name here' name='name' onChange={handleDetails} value={signUpDetails.name} />
                <input type='email' placeholder='email here' name='email' onChange={handleDetails} value={signUpDetails.email} />
                <input type='password' placeholder='password here' name='password' onChange={handleDetails} value={signUpDetails.password} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup