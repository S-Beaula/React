import React from 'react'
import "./card.css"
const Card = (cardinfo) => {
    const obj={
        br:"5px solid black"
    }
  return (
    <div className="card" style={{border:obj.br}}>
           <h2>{cardinfo.title}</h2>
            <img src={cardinfo.img} alt={cardinfo.title} width="150px" />
            <h3>{cardinfo.price}</h3>
            <h4>{cardinfo.category}</h4>
            <h5>{cardinfo.rate}</h5>
            <button>{cardinfo.addbtn}</button>
            <button>{cardinfo.buynow}</button>

    </div>
  )
}

export default Card