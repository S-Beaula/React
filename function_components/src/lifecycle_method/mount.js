import React, {useEffect} from 'react'
import a from "axios"
function Mount(){
    useEffect(()=>{
        a.get('https://fakestoreapi.com/products').then(res => console.log(res)).catch(err => console.log(err));
        alert("mounting")
    }, [])
    
    return(
        <div></div>
    )
}
export default Mount