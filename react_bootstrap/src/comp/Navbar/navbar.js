import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import "./navbar.css"
const Navbar1 = () => {
  return (
    <div>
    <Navbar bg='danger' expand="md" className='navbar' variant='dark'>
        <Navbar.Brand style={{fontSize:30,fontWeight:500}}>Cart</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className='nav-collapse'>
        <Nav className='nav'> 
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Details</Nav.Link>
        <Button variant="warning">Login</Button>
        <Button variant='outline-warning'><FaShoppingCart size={20}></FaShoppingCart>
        <Badge style={{top:-11}}>1</Badge></Button>
        </Nav>
        </Navbar.Collapse>
        

    </Navbar>
    </div>
  )
}
export default Navbar1