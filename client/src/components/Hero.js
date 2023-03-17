import React from 'react';
//import data//
import {hero, stats} from '../data';
//impor//
import Stats from '../components/Stats';

const Hero = () => {
  //destructure hero//
const {title,subtitle,buttonText} = hero;
  return <section className='h-[750px] w-full bg-hero bg-right bg-cover bg-no-repeat text-black pt [115px] pb-[254px] relative mb-12px lg:bg-center lg:mb-28px'>
   <div className="Container mx-auto text-center">
    
<h1 className='text-2x1  mx-auto font-semibold mb-[30px] lg:text-[60px] lg:leading-tight lg:max-w-[888px]'> 
{title} 
</h1>
<h2 className='mb-[30px] max-w-[627px] mx-auto lg: mb-[65px] lg:text-xl'> 
{subtitle} 
</h2>
<button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(160,160,160)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px[90px] lg:py[16px] lg:mb-[195px]'>
  {buttonText} 
  </button>
  <div>
  <Stats/>
  </div>
     </div>
  </section>;
};

export default Hero;
