import React, { useState } from 'react';
import axios from 'axios';

const CityAndPopulation = () => {
  const [city, setCity] = useState('');
  const [population, setPopulation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/population/cities',
        {
          city: city,
        }
      );
      setPopulation(response.data.data.population);
    }   catch (error) {
            console.error('Error fetching population: ', error);
        }
  };

  return (
    <React.Fragment>
        <div className="form-rec text-center m-5">
            <input 
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className='btn btn-outline-success' onClick={handleSubmit}> 
                Get Population
            </button>
        </div>

        <div className="row">
            {population.map((item) => (
              <div className="col-sm-12 col-md-12 col-lg-2">
                <p>{item.name}</p>
              </div>  
            ))}
        </div>
    </React.Fragment>
  )
   
};

export default CityAndPopulation;
