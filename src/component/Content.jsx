import React from 'react'
import './style.css'
import { Con } from '../assets'

const Content = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 content-space">
              <img src={ Con } alt="" className='w-100'/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 content-text" style={{marginTop: '160px', marginLeft: '100px'}}>
              <h2><b>Leading healthcare <br /> providers</b></h2>
              <p className='' style={{color: '#7D7987', marginTop: '80px'}}>Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride <br /> in the solutions we deliver</p>
              <button className='primary-button'style={{padding: '10px 25px', backgroundColor: 'white', borderRadius: '25px', borderColor: '#458FF6', color: '#458FF6', marginTop: '20px' }}>Learn more</button>
            </div>
            
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Content
