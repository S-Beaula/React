import React from 'react'
import { useParams } from 'react-router-dom'
import "./singleProduct.css"
const SingleProduct = ({data}) => {
    console.log(data);
    
    // console.log(useParams());
    const {id}=useParams()
    // console.log(id);
    const productItem=data.find((x)=> x.id=== parseInt(id))
    console.log(productItem);
    
  return (
    <div className='singlecard'>
        <img src={productItem.image} alt='' width={250}/>
        <h2>{productItem.name}</h2>
        <p>{productItem.id}</p>
    </div>
  )
}

export default SingleProduct