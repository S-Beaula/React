// import React from "react";
// export const Props=(x)=>{
//    return(
//     <div>
//         <h1 style={{backgroundColor:"red"}}>{x.n}</h1>
//         <h2>{x.p}</h2>
//         <h3>{x.a}</h3>
//     </div>
//    )
// }
import React from "react";
const Props = (x) => {
    return (
        <div>
            <h2>{x.title}</h2>
            <img src={x.img} alt={x.title} width="150px" />
            <h3>{x.price}</h3>
            <h4>{x.category}</h4>
            <h5>{x.rate}</h5>
            {/* <h2>{x.n}</h2>
            <h2>{x.a}</h2>
            <h2>{x.p}</h2> */}
            
        </div>
    )
}
export default Props;