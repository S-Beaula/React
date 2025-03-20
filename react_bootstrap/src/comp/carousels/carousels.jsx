import React from 'react'
import img1 from "../images/th.jpg"
import img2 from "../images/th (1).jpg"
import img3 from "../images/th (2).jpg"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousels = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
          <img src={img1} alt='' className='d-block w-100'/>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img2} alt='' className='d-block w-100'/>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img3} alt='' className='d-block w-100'/>
      </Carousel.Item>
      </Carousel>
      </div>
      
  )
}
export default Carousels