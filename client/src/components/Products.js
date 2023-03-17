import React from 'react';
//import data
import {products} from '../data';
//import components 
import ProductSlider from '../components/ProductSlider';

const Products = () => {
  //destructuree productsss
  const {title,subtitle} = products;
  return <section className='section text-center'>
    <div className="container mx-auto">
      <div>
        <h2 className='title'>{title}</h2>
        <p className='max-w-[639px] mx-auto mb-[80px] lg:mb-[70px]'>{subtitle}</p>
      </div>
      {/*sliderrr */}
      <ProductSlider />
    </div>
  </section>;
};

export default Products;
