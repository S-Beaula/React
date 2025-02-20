import "./App.css"
import Banner from "./Banner"
import JSX from "./JSX/jsx"
function App(){
  return(
    <div> <div id="navbar-container">
    <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carimage" width="70" height="60"/>
    <div id="navLink">
       <p>Home</p>
       <p>About</p>
       <p>ContactUs</p>
       <p>Details</p>
    </div>
    <div id="navBtn">
    <button>Login</button>
    <button>Signup</button>
    </div>
 </div>
 <JSX></JSX>
 <Banner></Banner></div>
)
}
export default App