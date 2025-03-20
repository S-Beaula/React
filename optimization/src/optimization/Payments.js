import React, { useMemo } from 'react'

const Payments = React.memo(
  ({cartItems}) => {
    console.log("Rendering payment");
    const totalAmount=useMemo(()=>{
      console.log("Total amount is updated");
      return cartItems.reduce((acc,inc)=>acc + inc.Price * inc.no,0)
    },[cartItems])
    return (
      <div>
        {totalAmount}
      </div>
    )
  }
)
export default Payments