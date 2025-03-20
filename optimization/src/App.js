//React.memo()----memorize the component
// import React,{useState} from 'react'
// import Hello from './withoutOpt/Hello'
// const App = () => {
//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>inc</button>
//       {count}
//       <Hello name='Beaula'/>
//     </div>
//   )
// }
// export default App

//useMemo()---memorize the function
// import React, { useState } from 'react'
// import Payments from './withoutOpt/Payments'
// const App = () => {
//     const [cartItems,setCartItems]=useState([
//         {id:0,Item:"Mobile",Price:60000,no:2},
//         {id:1,Item:"Earpods",Price:10000,no:1},
//         {id:2,Item:"TV",Price:80000,no:3},
//     ])
//     const [cardText,setCardText]=useState("")
//   return (
//     <div>
//         <input type='text' onChange={(e)=>setCardText(e.target.value)}/>
//         {cardText}
//         <Payments cartItems={cartItems}/>
//     </div>
//   )
// }

// export default App


// useCallback()
// import React, {useCallback, useState} from 'react'
// import Usecallback from './withoutOpt/Usecallback'
// const App = () => {
//   const [count,setCount]=useState(0)
//   const [color,setColor]=useState("")
//   const inc=useCallback(()=>{
//     setCount(count+1)
//     console.log("rendering Usecallback ");
//   },[color])
//   return (
//     <div style={{backgroundColor:color}}>
//       <input type='text' onChange={(e)=>setColor(e.target.value)}/>
//       {count}
//       <Usecallback inc={inc}/>
//     </div>
//   )
// }

// export default App