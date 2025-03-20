import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'
const Cart = () => {
  const [cartItem,setCartItem]=useState([])
  const [cartItemDel,setCartItemDel]=useState(false)
   useEffect(()=>{
    axios.get('http://localhost:3000/cartItem').then(res=>{
      setCartItem(res.data)
      console.log(res.data);
    })
   },[cartItemDel])
   const HandleDeletecartItem= async (del)=>{
    try{
      await
    axios.delete(`http://localhost:3000/cartItem/${del.id}`)
    console.log(del);
    setCartItemDel(true)
    alert("Item successfully deleted from cart")
    }
    catch(err){
      console.log(err);
    }
   }
  return (
    <div>
       {cartItem.length > 0 ? 
        <Table striped bordered hover responsive="sm">
        <thead>
          <th>S.no</th>
          <th>Recipe Name</th>
          <th>Recipe Image</th>
          <th>Status</th>
        </thead>
        <tbody>
          {cartItem.map((x,index)=>{
            return(
              <tr>
            <td>{index+1}</td>
            <td>{x.name}</td>
            <td><img src={x.image} alt={"RecipeImages"} width={200}/></td>
            <td><Button onClick={()=>HandleDeletecartItem(x)}>Delete</Button></td>
            </tr>
            )
          })}
        </tbody>
      </Table>: <h1>No items found in Cart</h1>}
    </div>
  )
}

export default Cart