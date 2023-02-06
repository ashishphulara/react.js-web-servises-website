import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import img3 from "../assets/image5.jpg"
import img4 from "../assets/image7.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='servisces'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false}>
        <div>
            <img src={img1} alt="item1" />
            <p className='legend'>full stack services</p>
        </div>
        <div>
            <img src={img2} alt="item2" />
            <p className='legend'>peer-to-peer support </p>
        </div>
        <div>
            <img src={img3} alt="item2" />
            <p className='legend'>24 Hours support</p>
        </div>
        <div>
            <img src={img4} alt="item2" />
            <p className='legend'>Expertise developers </p>
        </div>
    </Carousel>
    </div>
  )
}

export default Services