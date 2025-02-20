import React from 'react'
import Child from './class_components/child/child'
import Count from './class_components/Count/count'
import Login from './class_components/login/login'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      color:"green",
    }
  }

  render(){
    const Data=[{
      Name:"Beaula",
      Age:21,
      Place:"Hyd"
    },
    {
      Name:"Radha",
      Age:38,
      Place:"Hyderabad"
    },
    {
      Name:"Akhila",
      Age:22,
      Place:"Medchal"
    },
    {
      Name:"Harika",
      Age:15,
      Place:"Suchitra"
    }
    ]
   
    return(
      <div style={{textAlign:"center",backgroundColor:this.state.color, marginTop:10}} >
     <div style={{marginLeft:"40%",marginBottom:"20px",padding:10,display:'flex',gap:"20px"}}>
      <button onClick={() => this.setState({ color: "red" })} style={{padding:5}}>Red</button>
      <button onClick={() => this.setState({ color: "pink" })} style={{padding:5}}>Yellow</button>
      <button onClick={() => this.setState({ color: "purple" })} style={{padding:5}}>Purple</button>
      <button onClick={() => this.setState({ color: "pink" })} style={{padding:5}}>Pink</button>
      <button onClick={() => this.setState({ color: "brown" })} style={{padding:5}}>Brown</button>
     </div>
    
      <Count/>
      <Login/>
      
        
        {Data.map(item=>{
          return(
            <Child n={item.Name} 
            a={item.Age} p={item.Place}></Child>
          )
        })}
       
      </div>
    
    )
  }
}
export default App