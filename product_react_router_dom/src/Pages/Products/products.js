import React from 'react'
import Footer from '../../Components/Footer/footer'
import { useNavigate } from 'react-router-dom';
import './products.css'

const Products = ({data}) => {
    const navigate=useNavigate()
    
  return (
   <div>
     <div id='product-container'>
       {data.map(data=>{
        return(
            <div className='product-card' onClick={()=>navigate(`/products/${data.id}`)}>
                <img src={data.image} alt='' width={400}/>
                <h3>{data.name}</h3>
                <h5>{data.cuisine}</h5>
                <p>{data.rating}</p>
                <div style={{display:"flex",gap:20}}>
                <button>ingredients</button>
                <button>instructions</button></div>
            </div>
        )
       })}
     
    </div>
      <Footer/>
   </div>
  )
}

export default Products