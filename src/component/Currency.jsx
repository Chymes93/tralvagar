import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Currency = () => {
    const [data, setData] = useState([]);

    const GetCurrency = () => {
        const countryCurrency = new Headers();
        countryCurrency.append("content-type", "application/json");


        const currencyMethod = {
            method: 'Get',
            headers: countryCurrency
        };

        const url = "https://countriesnow.space/api/v0.1/countries/currency"

        fetch(url, currencyMethod)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const data = result.data;
            setData(data);
        })
        .catch(error => console.log('error', error));

    }

    
    useEffect(() => {
        GetCurrency();
    }, [])
    
    
    
    
    
    
    
    
    return (
    <React.Fragment>
        <div className="row">
            {data.map((item)=>
                <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
                    <div className="card-body">
                        <p>{item.name}</p>
                        <p>{item.currency}</p>
                    </div>
                </div>
            )}
        </div>
    </React.Fragment>
  )
}

export default Currency
