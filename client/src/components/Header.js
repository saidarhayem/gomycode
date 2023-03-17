import React, {useState,useEffect} from 'react';
  
//import logo
import Logo from '../assets/img/logo.svg';

//import iconss
import { CgMenuRight,CgClose } from 'react-icons/cg';

//import data 
import { navigation } from '../data';

//import components
import NavMobile from './NavMobile';

const Header = () => {
  const [bg,setBg] = useState (true);
  const [mobileNav,setMobileNav] = useState (false);
  return (
  <header
   className={`${
    bg ? 'bg-primary py-4 lg:py-6':'bg-none'
  }  `} 
  >
   <div className="container mx-auto ">
   <div className='flex justify-between items-center'>
    {/*logo */}
    <a href='#'>
   <img className='h-6 lg:h-8' src= {Logo} alt="" />
    </a>
    {/*menu icons */}
    <div className='text-2x1 text-white md:hidden lg:text-3x1 cursor-pointer'> { mobileNav ?<CgClose/>: <CgMenuRight/> }</div>
    {/*nav */}
    <nav className='hidden md:flex'>
      <ul className='md:flex md:gap-x-12'>
       {navigation.map((item,index)=>{
        return <li key={index}>
          <a className='capitalize text-white hover:border-b transition-all' href={item.href}>
            {item.name}
            </a>
        </li>

       })}
      </ul>
    </nav>
    </div>
   </div>
  
 </header>
  );
}; 


export default Header;
