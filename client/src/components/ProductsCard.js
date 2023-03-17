import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addorder } from './JS/OrderSlice/orderSlice'
import { Link } from 'react-router-dom'
import { userCurrent } from './JS/userSlice/userSlice';
import { updtproduct } from './JS/productSlice/productSlice';

const ProductsCard = ({product}) => {

  const [open , setOpen] = useState(false);
  

    const dispatch =useDispatch()
    const user = useSelector((state) => state.user?.user)
    console.log(user)
    const [edittext, setedittext] = useState({
      name:product.name,
      price:product.price,
      image:product.image
    });
    
  return (
    
    <div className='productcard'>
    <div className='card'>
    
    {/* <div>
<input type="text" placeholder={product.name} onChange={(e)=>setedittext({...edittext,name:e.target.value})}></input>
<input type="text" onChange={(e)=>setedittext({...edittext,price:e.target.value})}></input>
<button onClick={()=>dispatch(updtproduct({id:product._id,product:edittext}))}>ok</button>
</div>   */}



     <img src={product.image} alt=''/>
      <h1>{product.name}</h1>
      <p>{product.price}</p>

      <button className='buttom' onClick={()=>dispatch(addorder
      ({
        cartItems: product,
        prixTotal: product.price,
        ordredBy: user._id,
   
      }

      ))}>Add to Cart</button>

<div className='Navbar-login buttom' >

<h6 onClick={() => setOpen(!open)} >Edit</h6>
{open ?
  <div className="dropdown">
<input type="text" placeholder="name"onChange={(e)=>setedittext({...edittext,name:e.target.value})}></input>
<input type="text"  placeholder="entre price"  onChange={(e)=>setedittext({...edittext,price:e.target.value})}></input>
<button className='buttom' onClick={()=>dispatch(updtproduct({id:product._id,product:edittext}))}>ok</button>
    {/* <Link className='link'> </Link >
    <Link className='link'></Link >
    <Link className='link'></Link > */}

  </div>
  : null}




</div>
      {/* <button className='buttom' onClick={()=>handelOpen()} > Edit </button> */}
{/* <div>
<input type="text" placeholder={product.name} onChange={(e)=>setedittext({...edittext,name:e.target.value})}></input>
<input type="text" onChange={(e)=>setedittext({...edittext,price:e.target.value})}></input>
<button onClick={()=>dispatch(updtproduct({id:product._id,product:edittext}))}>ok</button>
</div>   */}
    </div>
    </div>
  )
}

export default ProductsCard
