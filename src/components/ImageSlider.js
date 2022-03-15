import React, {useState} from 'react'
// import SliderData from './SliderData'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "./Assets/DSC.jpg";
import img2 from "./Assets/DSC_0036.jpg"
import img3 from "./Assets/DSC_0131.jpg"
import img4 from "./Assets/DSC_0146.jpg"
import img5 from "./Assets/DSC_0151.jpg"
import img6 from "./Assets/image.jpg"

// .sliderimg{
//   width: 100%;
//   height: 500px;
//   object-fit: cover
// }

const ImageSlider = () => {


  return (
    <>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={img1} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
        <img src={img2} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
        <img src={img3} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
        <img src={img4} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
        <img src={img5} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
        <img src={img6} className="sliderimg" alt="" style={{width: "90%", height: "500px", objectFit: "cover"}} />
      </AliceCarousel>
    </>
  )
}

export default ImageSlider