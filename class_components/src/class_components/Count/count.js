import React from "react";
class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
            Number:0

        }
        this.high=this.increase.bind(this)
        this.down=this.decrease.bind(this)
    }
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
    dec=()=>{
        this.setState({count:this.state.count-1})
    }
    increase(){
        this.setState({Number:this.state.Number+1})
    }
    decrease(){
        this.setState({Number:this.state.Number-1})
    }
    render(){
        return(
            <div style={{display:"flex",gap:"10px",marginLeft:"46%"}}>
            <div>
               <button onClick={()=>this.setState({count:this.state.count-2})}>-</button>
               <button onClick={this.dec} disabled={this.state.count === 0}>-</button>
               <h1>{this.state.count}</h1>
               <button onClick={this.inc}>+</button>
               <button onClick={()=>this.setState({count:this.state.count+2})}>+</button>
            </div>
            <div>
                <button onClick={this.increase.bind(this)}>+</button>
                <button onClick={this.high} disabled={this.state.Number===0}>+</button>
                <h1>{this.state.Number}</h1>
                <button onClick={this.down}>-</button>
                <button onClick={this.decrease.bind(this)}>-</button>
            </div>
            </div>
           
        )
    }
}
export default Count