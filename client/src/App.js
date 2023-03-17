import React, { useEffect } from 'react';
import { Route, Routes ,Navigate, useNavigate} from 'react-router-dom';
import Login from'./components/Login';
import Register from'./components/Register';
import Profile from'./components/Profile';
import  PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
// import components

import Hero from './components/Hero'
//importttt feauters
import Features from './components/Features';
import NewItems from './components/NewItems';
import FeaturesSecond from './components/FeaturesSecond';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import { logout, userCurrent } from './components/JS/userSlice/userSlice';
import About from './components/About';
import ShowProduct from './components/ShowProduct';
import Panier from './components/Panier/Panier';
const App = () => {
  const isAuth = localStorage.getItem('token');
  const dispatch =useDispatch()
  const navigate =useNavigate()

  useEffect(() => {
    if(isAuth){
      dispatch(userCurrent())
    } 
    
    
  }, [])

  return (
<>
 
    
 {isAuth? <button onClick={()=>{ 
  dispatch(logout());
  navigate("/")
  }}>logout</button>: null } 

 
  
    
 <div className='w-full max-w-[1440px] mx-auto bg-white'>
    <Header/>
    <Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/prod" element={<ShowProduct />} />
<Route exact path="/cart" element={<Panier />} />
<Route exact path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route element={<PrivateRoute/>}>
<Route path="/profil" element={<Profile/>} /> 
</Route>{""}
  </Routes>  
    <Footer/>
   </div>; 

  </>
  );
}



export default App;
