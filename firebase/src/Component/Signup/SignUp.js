// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import {createUserWithEmailAndPassword } from 'firebase/auth'
// import { author, db } from '../../formsConfig' 
// import {set,ref} from 'firebase/database'
// const SignUp = () => {
//   const [signupDetails, setSignupDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const handleChange = (e) => {
//     setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     const { name, email, password } = signupDetails;
//     e.preventDefault();
//     if (password !== signupDetails.confirmpassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     try {
//       const signupUsers = await createUserWithEmailAndPassword(author, email, password);
//       console.log(signupUsers);
//       alert("Successfully Signed Up!");

//       await set(ref(db,'users/'+name),{
//         name:name,
//         email:email,
//         id:signupUsers.user.uid,
//       })
//       setSignupDetails({name:"",email:"",password:"",confirmpassword:""})
//     }
//      catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div>
//       <Form onSubmit={handleSubmit} style={{ width: "40%" }}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control type='text' placeholder='name here' name='name' onChange={handleChange} value={signupDetails.name}/>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control type='email' placeholder='email here' name='email' onChange={handleChange} value={signupDetails.email}/>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control type='password' placeholder='password here' name='password' onChange={handleChange} value={signupDetails.password}/>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control type='password' placeholder='confirm password here' name='confirmpassword' onChange={handleChange} value={signupDetails.confirmpassword}/>
//         </Form.Group>
//         <Button type='submit'>Signup</Button>
//       </Form>
//     </div>
//   );
// };
// export default SignUp;

//Role Based Authentication
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { author, db } from '../../formsConfig' 
import {set,ref} from 'firebase/database'
const SignUp = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role:"user"
  });
  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const { name, email, password,role } = signupDetails;
    e.preventDefault();
    if (password !== signupDetails.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const signupUsers = await createUserWithEmailAndPassword(author, email, password);
      console.log(signupUsers);
      const signUpUsersCredentials=signupUsers.user
      
      await updateProfile(signUpUsersCredentials,{
        displayName:name
      })
      let roleType=role === "admin" ? "admins" : "users"
      alert("Successfully Signed Up!");
      await set(ref(db,`${roleType}/${name}`),{
        name:name,
        email:email,
        id:signupUsers.user.uid,
        role:role
      })
      setSignupDetails({name:"",email:"",password:"",confirmpassword:""})
    }
     catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ width: "40%" }}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='name here' name='name' onChange={handleChange} value={signupDetails.name}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Role</Form.Label>
          <Form.Select onChange={handleChange} name='role'>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='email here' name='email' onChange={handleChange} value={signupDetails.email}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='password here' name='password' onChange={handleChange} value={signupDetails.password}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='confirm password here' name='confirmpassword' onChange={handleChange} value={signupDetails.confirmpassword}/>
        </Form.Group>
        <Button type='submit'>Signup</Button>
      </Form>
    </div>
  );
};
export default SignUp;