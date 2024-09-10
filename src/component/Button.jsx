import React from 'react'

const Button = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <button className='primary-button'style={{padding: '10px 25px', backgroundColor: 'white', borderRadius: '25px', borderColor: '#458FF6', color: '#458FF6', marginTop: '50px', display: 'block', margin: 'auto' }}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Button
