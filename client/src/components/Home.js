import React from 'react'
import Features from './Features';
import NewItems from './NewItems';
import FeaturesSecond from './FeaturesSecond';
import Products from './Products';
import Testimonial from './Testimonial';
import Newsletter from './Newsletter';
import Hero from './Hero';
import About from './About';

const Home = () => {
  return (
    <div>
<Hero />
    <Features/>
     <NewItems />
   
   <FeaturesSecond/>
   <Products/>
   <Testimonial/>
   <Newsletter/>
    </div>
  )
}

export default Home
