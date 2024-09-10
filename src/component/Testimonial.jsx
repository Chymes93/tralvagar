import React from 'react'
import { Testimage } from '../assets'
import { Wline } from '../assets';

const Testimonial = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-1"></div>
                    <div className="col-sm-12 col-md-12 col-lg-10 mt-5 py-5"style={{ borderRadius: '24px', backgroundColor: '#5A98F2', height: '425px', marginBottom: '50px'}}>
                        <div className="text-light text-center mt-3">
                            <h2><b>What our customer are saying</b></h2>
                            <div className=''>
                                <img src={ Wline } alt="" />
                            </div>
                    
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="image-section d-flex ml-5"style={{ marginTop: '80px'}}>
                                    <img src={ Testimage } alt="" />
                                    <div className="text-section ml-4 mt-5 text-light">
                                        <h4><b>Edward Newgat</b></h4>
                                        <p>Founder Circle</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <p className='text-light'style={{ marginTop: '100px' }}>“Our dedicated patient engagement app and <br /> web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> or administrative hassle) and securely”</p>
                            </div>

                        </div>
                        

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        
      
    </React.Fragment>
  )
}

export default Testimonial

