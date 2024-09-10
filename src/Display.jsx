import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Content from './component/Content'
import Feature from './component/Feature'
import Service from './component/Service'
import Button from './component/Button'
import Testimonial from './component/Testimonial'
import Article from './component/Article'
import Bottom from './component/Bottom'
import Chime from './component/Chime'
import CountryForm from './component/CountryForm';
import Currency from './component/Currency';
import CityAndPopulation from './component/CityAndPopulation';



const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/content" element={<Content />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/service" element={<Service />} />
          <Route path="/button" element={<Button />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/article" element={<Article />} />
          <Route path="/aboutus" element={<Chime />} />
          
          <Route path="/app" element={<CityAndPopulation />} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default Display
