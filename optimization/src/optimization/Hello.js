// import React, { useEffect } from 'react'

// const Hello = ({name,count}) => {
//     console.log("rendering child");
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
//   },[count])
//   return (
//     <div>
//         {name}
//         child
//     </div>
//   )
// }

// export default Hello

import React from 'react'

const Hello = React.memo(({name,count}) => {
    console.log("rendering child");
  return (
    <div>
        {name}
        child
    </div>
  )
})

export default Hello