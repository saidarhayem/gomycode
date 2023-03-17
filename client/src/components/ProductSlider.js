import React from 'react';
//import swiper react components
import {Swiper,SwiperSlide} from 'swiper/react';
// import swiper style 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
//import required modules
import { Navigation,Pagination} from 'swiper';
// import  data
import {navigation, products} from '../data';
// import icons
import {HiPlus } from 'react-icons/hi';

const ProductSlider = () => {
  //destructure products
  const {pages} = products;
  return <Swiper
   modules={[Pagination,Navigation]} 
  pagination= {{clickable : true}} 
   navigation={true}
   className='productSlider min-h-[130px]'
   >
   
    {pages.map((page,index)=>{
      return <SwiperSlide key={index}> 
      <div className='grid grid-cols-3 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'> 
        {page.productList.map((product,index)=>{
          //destructure product
          const { image,name,price,oldPrice} = product;

        return <div  className='w-full max-w-[290px] h-[380px] text-left' 
         key={index} 
         >
          <div className='border hover:border-accent rounded-[8px] w-full max-w-[210px] h-full  max-h-[230px] flex items-center justify-center mb-[30px] relative transition  '>
            <img src={image.type} alt=''/>
            <div className='absolute bottom-8 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
              <HiPlus className='text-xl text-primary'/>
            </div>
          </div>
          <div className='font-semibold lg:text-xl'>{name}
          </div>
          <div className='flex items-center gap-x-4'>
            <div> DT {price}</div>
            <div className='text-[15px] text-grey line-through'>dt {oldPrice}</div>
          </div>
        </div>
        })}
      </div>
      </SwiperSlide>

    })}
  </Swiper>
};

export default ProductSlider;
