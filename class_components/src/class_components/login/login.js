import React from "react";
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            login:false
        }
    }
    click=()=>{
       this.setState({click:!this.state.login})
    }
    render(){
        return(
            <div>
                {/* <button onClick={()=>this.setState({click:!this.state.login})}>login_inline</button> */}
                <button onClick={this.click} style={{padding:"5px",marginTop:20}}>Login</button>
                {this.state.click && <div>
                <input type="name" placeholder="Name here"/><br/>
                <input type="email" placeholder="email here"/><br/>
                <input type="password" placeholder="password here"/><br/>
                <input type="password" placeholder="confirmpassword here"/><br/>
                </div>}
            </div>
        )
    }
}
export default Login