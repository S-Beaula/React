import React from "react";
class Child extends React.Component {
    render() {
        console.log(this.props);
        
        return (
            <div style={{border:"2px solid black", padding:"10px",margin:"50px"}}>
                <h1 style={{backgroundColor:"greenyellow"}}>{this.props.n}</h1>
                <h4 style={{backgroundColor:"goldenrod"}}>{this.props.a}</h4>
                <h3 style={{backgroundColor:"gray"}}>{this.props.p}</h3>
            </div>
        )
    }
}
export default Child