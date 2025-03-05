import React from 'react'
import {Nav,Navbar,Button,Badge} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'

const Navbar1=() => {
return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" className='navbar' expand="md">
            <Navbar.Brand href="#home" style={{fontSize:"2.5rem",textDecoration:"underline orange"}}>Foodies Recipe</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='nav-collapse'>
            <Nav className='nav'>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/aboutus">AboutUs</Nav.Link>
              <Button variant="warning">Login</Button>
              <Button variant='outline-warning'><FaShoppingCart size={20}></FaShoppingCart>
              <Badge style={{top:-11}}>1</Badge></Button>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        <br />
    </div>
  );
}
export default Navbar1
