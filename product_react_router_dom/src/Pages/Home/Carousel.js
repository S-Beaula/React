import React from 'react'
import img1 from "../images/food1.jpeg"
import img2 from "../images/food2.jpeg"
import img3 from "../images/food3.jpeg"
import Carousel from 'react-bootstrap/Carousel';
const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
          <img src={img1} alt='' className='w-100'style={{ height: "550px", objectFit: "cover" }}/>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img2} alt='' className='w-100'style={{ height: "550px", objectFit: "cover" }}/>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img3} alt='' className='w-100'style={{ height: "550px", objectFit: "cover" }}/>
      </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default CarouselComponent