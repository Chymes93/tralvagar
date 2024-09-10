import React from 'react'
import Divide from './Divide'
import TestArticle from './TestArticle'
import './style.css'
import Button from './Button'

const Article = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="text-center mt-5 mb-5">
                    <h2><b>Check out our latest article</b></h2>
                    <div>
                        <Divide />
                    </div>
                    
                </div>
                <div className="row">
                    <TestArticle />
                </div>    
                <div className=''>
                    <button className='primary-button'style={{padding: '10px 64px', outline: 'none', boxShadow: 'none', backgroundColor: 'white', borderRadius: '25px', border: '1px solid #458FF6', color: '#458FF6', display: 'block', margin: '40px auto' }}>View all</button>   
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      
    </React.Fragment>
  )
}

export default Article

