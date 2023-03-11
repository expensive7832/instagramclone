import React from 'react'
import profile from "./../assets/girl2.png"
import { BsPlusCircle } from 'react-icons/bs'
import { FaLocationArrow} from "react-icons/fa"

function Home() {
  return (
    <div className="home w-50 m-auto p-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <img src={profile} alt="" style={{width: "2rem", height: "2rem", objectFit:"cover", borderRadius:"50%"}}/>

          <div>
            <label htmlFor="pickphoto"><BsPlusCircle/></label>
            <input type="file" id="pickphoto" hidden/>
          </div>
        
        </div>

        <div className='loc my-3'>
          <FaLocationArrow/> 
          <small className='px-1'>NG</small>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quas?</p>

        <hr />
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img className='w-100' src={profile} alt="" style={{height: "10rem", objectFit:"contain"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home