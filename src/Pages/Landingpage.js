import React from 'react'
import leftImage from "./../assets/leftimage.png"
import igLogo from "./../assets/iglogo.png"
import screenshot1 from "./../assets/screenshot1.png"
import screenshot2 from "./../assets/screenshot2.png"
import screenshot3 from "./../assets/screenshot3.png"
import screenshot4 from "./../assets/screenshot4.png"
import Slider from "react-slick";

function Landingpage() {

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    fade: true,

  }

  return (
    <div className="landing container">
      <div className="row justify-content-center align-items-center">

        <div className="col-md-6 d-none d-md-block">
          <img src={leftImage} alt="" className='position-relative leftimage' />
          <div className="carousel position-relative">
          <div >
            <Slider {...settings} className='inner'>
              <img src={screenshot1} alt="" />
              <img src={screenshot2} alt="" />
              <img src={screenshot3} alt="" />
              <img src={screenshot4} alt="" />
            </Slider>
          </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img src={igLogo} alt="" className='d-block m-auto' />

          <input type="text" placeholder='phone, phonumber and email'/>

          <div className='pwd my-2'>
            <input type="password"/>
            <small>Show</small>
          </div>

          <button className='btn btn-md btn-primary w-100'>login</button>
          <p className='text-center'>OR</p>
        </div>

      
        
      </div>
    </div>
  )
}

export default Landingpage