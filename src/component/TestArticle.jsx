import React from 'react'
import { Arrow, Check, Herbal, Natural } from '../assets'

const TestArticle = () => {
    const articleImages = [
        {
            id: 0,
            image: Check,
            heading: "Disease detection, check up in the laboratory",
            paragraph: "In this case, the role of the health laboratory is very important to do a disease detection..."
        },
        {
            id: 1,
            image: Herbal,
            heading: "Herbal medicines that are safe for consumption",
            paragraph: "Herbal medicine is very widely used at this time because of its very good for your health..."
        },
        {
            id: 2,
            image: Natural,
            heading: "Natural care for healthy facial skin",
            paragraph: "A healthy lifestyle should start from now and also for your skin health.There are some..."
        },
    ]

    const displayArticles = articleImages.map((item) =>
        <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
        <div className="article-card" style={{ boxShadow:  'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px, rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: '20px', width: '350px', height: '512px' }}>
           <div className="myArticle-img">
               <img src={item.image} alt="" className=''style={{ width: '350px', height: '240px'}}/>
           </div>
           <div className="myArticle-body">
               <h5 className='ml-4 mt-4'style={{ fontSize: '21px'}}><b>{item.heading}</b></h5>
               <p className='ml-4 mt-4' style={{color: '#7D7987', fontSize: '16px'}}>{item.paragraph}</p>
               <div className='d-flex' style={{ gap: '10px'}}>
                    <small className='ml-4' style={{ fontSize: '17px', color: '#4089ED', }}>Read more</small>
                    <img src={ Arrow } alt=""  style={{ width: '14.14px', height: '9px', marginTop: '10px'}}/>
               </div>
           </div>
       </div>
    </div> 
    
    )

    return (
        <React.Fragment>
           {displayArticles}
        </React.Fragment>
      )
 
}

export default TestArticle
