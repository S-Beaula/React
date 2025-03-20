import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import {Nav,Navbar,Button,Badge} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'

const Navbar1=() => {
  const navigate=useNavigate()
  const [cartItem,setCartItem]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/cartItem").then(res=>{
      setCartItem(res.data)
      console.log(res.data);
    })
  },[])
return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" className='navbar' expand="md">
            <Navbar.Brand href="#home" style={{fontSize:"2.5rem",textDecoration:"underline orange"}}>Foodies Recipe</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='nav-collapse'>
            <Nav className='nav'>
              <Link to={"/home"}>Home</Link>
              <Link to={'/recipes'}>Recipes</Link>
              <Link to={'/About'}>Aboutus</Link>
              <Button variant="warning" onClick={()=>navigate('/Addrecipes')}>Add Recipes</Button>
              <Button variant='outline-warning' onClick={()=>navigate('/cart')}><FaShoppingCart size={20}></FaShoppingCart>
              <Badge style={{top:-11}}>{cartItem.length}</Badge></Button>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        <br />
    </div>
  );
}
export default Navbar1