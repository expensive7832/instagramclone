import React from 'react'
import leftImage from "./../assets/leftimage.png"
import igLogo from "./../assets/iglogo1.png"
import screenshot1 from "./../assets/screenshot1.png"
import screenshot2 from "./../assets/screenshot2.png"
import screenshot3 from "./../assets/screenshot3.png"
import screenshot4 from "./../assets/screenshot4.png"
import Slider from "react-slick";
import { Link } from 'react-router-dom'

function Landingpage() {

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: true,
    fade: true,

  }

  return (
    <div className="landing container">
      <div className="row d-flex justify-content-center align-items-center">

        <div className="col-md-6 d-none d-md-block ">
          <img src={leftImage} alt="" className='position-relative leftimage' />

          <div className='position-absolute d-block text-center top-50 start-50 translate-middle' style={{
          zIndex: 1000
          }}>
            
            <img src={screenshot4} alt=""  className='ms-5' style={{width: "60%", height: "100%", objectFit: "cover"}}/>
            
          </div>
            
        </div>

        <div className="col-12 col-md-6 m-auto">
          <img src={igLogo} style={{width: "50%", padding: "2rem"}} alt="" className='d-block m-auto' />

          <input type="text" placeholder='phone, phonumber and email'/>

          <div className='pwd my-2'>
            <input type="password"/>
            <small>Show</small>
          </div>

          <button className='btn btn-md btn-primary w-100'>login</button>
          <p className='text-center'>OR</p>

          <Link to="/register" className='btn btn-md btn-primary w-100'>Signup</Link>
        </div>

      
        
      </div>
    </div>
  )
}

export default Landingpage