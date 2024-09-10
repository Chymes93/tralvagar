import React from 'react'
import './style.css'
import { Feat } from '../assets'
import { FiArrowDown } from 'react-icons/fi';


const Feature = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
              <h2 className='mt-4'><b>Download our <br /> mobile apps</b></h2>
              <p className='mt-5'>Our dedicated patient engagement app and <br /> web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> or administrative hassle) and securely</p>
              <button className='' style={{padding: '10px 25px', backgroundColor: 'white', borderRadius: '25px', borderColor: '#458FF6', color: '#458FF6', marginTop: '20px'}}>
                Download <FiArrowDown />
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src={ Feat } alt="" className='w-100'/>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
          
    </React.Fragment>
  )
}

export default Feature
