import React from 'react'
import Footer from '../../Components/Footer/footer'
import CarouselComponent from './Carousel' 
const Home = () => {
  return (
    <div>
     <h1 style={{textAlign:"center", marginBottom:"20px"}}>Welcome to Foodies Recipe. <i>"Where Every Bite Tells a Story!"</i></h1>
     <CarouselComponent/>
     <Footer/>
    </div>
  )
}

export default Home