import React from 'react'
import { Logo } from '../assets'
import './style.css'

const Bottom = () => {
  return (
    <React.Fragment>
        <footer className='' style={{ backgroundColor:  '#5A98F2', padding: '32px 32px'}}>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 text-light" style={{ marginTop: '40px'}}>
                            <img src={ Logo } alt="" className='footer-img'/>
                            <p className='mt-3'>Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br /> for everyone</p>
                            <p className='mt-5'>©Trafalgar PTY LTD 2020. All rights reserved</p>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2 text-light" style={{ marginTop: '40px'}}>
                            <h5 className='mb-4'><b>Company</b></h5>
                            <p>About</p>
                            <p>Testimonials</p>
                            <p>Find a doctor</p>
                            <p>Apps</p>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2 text-light" style={{ marginTop: '40px'}}>
                            <h5 className='mb-4'><b>Region</b></h5>
                            <p>Indonesia</p>
                            <p>Singapore</p>
                            <p>Hongkong</p>
                            <p>Canada</p>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2 text-light" style={{ marginTop: '40px'}}>
                            <h5 className='mb-4'><b>Help</b></h5>
                            <p>Help center</p>
                            <p>Contact support</p>
                            <p>Instructions</p>
                            <p>How it works</p>
                        </div>


                    </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
            </div>
        </footer>
      
    </React.Fragment>
  )
}

export default Bottom


