// import React  from 'react'
// import { useState } from 'react'
// import SignUp from './signUp'
// import { BsFillMoonFill } from "react-icons/bs";
// import { ImSun } from "react-icons/im";
// const App = () => {
//   // const [count,setCount]=useState(0)
//   // function increase(){
//   //   setCount(count+20)
//   // }
//   // function decrease(){
//   //   setCount(count-20)
//   // }

//   const [theme,setTheme]=useState(true)
//   function Theme(){
//     setTheme(!theme)
//   }

//    return (
//     <div style={{backgroundColor:theme ? "white" : "black",height:"100vh",color:theme ? "black" : "white"}}>
//       {/* <button onClick={increase}>+</button>
//       {count}
//       <button onClick={decrease} disabled={count===0}>-</button> */}
//       <SignUp/>
//       <button onClick={Theme}>{theme ?<BsFillMoonFill />  : <ImSun /> }</button>
//       {/* <button><ImSun /></button> */}
//     </div>
//   )
// } 

// export default App


//////////////////////.........UPDATE LIFE CYCLE METHOD...........//////////////////////////////////

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Mount from './lifecycle_method/mount';
import Update from './lifecycle_method/update';
function App() {
return (
    <div>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
       <Mount></Mount>
       <Update></Update>
    </div>
  );
}

export default App;
