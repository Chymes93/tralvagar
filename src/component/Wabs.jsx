import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Wabs = () => {
    const [data, setData] = useState([]);

    const getCountryStates = () => {
        const countryStates = new Headers();
        countryStates.append("content-type", "application/json");


        const countMethod = {
            method: 'Get',
            headers: countryStates
        };

        const url = "https://countriesnow.space/api/v0.1/countries/states"

        fetch(url, countMethod)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const data = result.data;
            setData(data);
        })
        .catch(error => console.log('error', error));
    }


    // async function getCountryStates() {
    //     try {
    //         const response = await axios.get('https://countriesnow.space/api/v0.1/countries/states');
    //         const data = await response.data.data;
    //         setData(data);
    //         console.log(data)
    //     }   catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    // }

    useEffect(() => {
        getCountryStates();
    }, [])
  
  
  
  
  
    return (
    <React.Fragment>
        .row
     
      
    </React.Fragment>
  )
}

export default Wabs
