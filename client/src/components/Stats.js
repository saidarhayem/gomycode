import React from 'react';
import { stats } from '../data';
const Stats = () => {
  return ( 
    <div className='bg-accent rounded-[20px] p-12  ' >
      <div className="flex flex-wrap gap-y-5 ">
        {stats.map((item, index) => {
          return <div className='min-h-[70px] w-3/6 flex  flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r log:even:last:border-none ' key={index}>
          <div className='text-2x1 font-semibold lg:text-4x12'>{item.value}</div>
          <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl '>{item.text}</div>

          
          </div>

        })}
          </div>
     </div>
      );
}

      export default Stats
