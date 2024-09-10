import React from 'react'
import './style.css'
import { Her } from '../assets'

const Hero = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 hero-space">
              <h1><b>Virtual healthcare <br /> for you</b></h1>
              <p className='mt-4'>Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br /> for everyone</p>
              < button className='hero-btn mt-5'>Consult today</button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
              <img src={ Her } alt="" className='w-100'/>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Hero
