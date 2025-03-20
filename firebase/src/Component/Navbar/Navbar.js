import React from 'react'
import './Navbar.css'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const Navbar1 = () => {
    const navigate=useNavigate()
  return (
    <div>
        <Navbar bg='danger' expand="md" className='navbar' variant='dark'>
        <Navbar.Brand style={{fontSize:30,fontWeight:500}}>Form</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className='nav-collapse'>
        <Nav className='nav'> 
        <Button variant="warning" onClick={()=>navigate('/signup')}>Signup</Button>
        <Button variant='warning' onClick={()=>navigate('/login')}>Login</Button>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbar1