import React from 'react'
import Footer from '../../Components/Footer/footer'
import "./Aboutus.css"
const Aboutus = () => {
  return (
    <div>
      <div id='about'>
        <h3>"At <i><b>Foodies Recipe</b></i>  Restaurant, we believe in fresh ingredients, bold flavors, and unforgettable dining experiences. From our signature dishes to chef-inspired specials, every meal is crafted with passion and served with love."</h3>
      </div>
      <div className='mission'>
        <h5>At <i><b>Foodies Recipe </b></i>Restaurant, we believe that food is more than just a meal – it’s an experience. Our mission is to:</h5>
        <p>✅ Serve fresh, high-quality ingredients.</p>
        <p>✅ Create delicious and innovative dishes.</p>
        <p>✅ Provide a welcoming and cozy atmosphere.</p>
        <p>✅ Support local farmers and sustainable sourcing.</p>
        <h5>We are passionate about bringing people together over food, because the best conversations happen around the table!</h5>
      </div>
      <div className='quote'>
        <h2><i>"👉 Come taste the magic at Foodies Restaurant – where every meal is a celebration! 🎉"</i></h2>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutus