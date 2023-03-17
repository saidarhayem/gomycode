import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../data';
import { getorder } from '../JS/OrderSlice/orderSlice';
import { deleteorder } from '../JS/OrderSlice/orderSlice';
import { updtorder } from '../JS/OrderSlice/orderSlice';
import { updtproduct } from '../JS/productSlice/productSlice';


const Panier = () => {
  const dispatch=useDispatch()
  const orders = useSelector((state) => state.order?.order)
  const products=useSelector((store)=>store.product?.product)
  console.log(orders)
  useEffect(() => {
    dispatch(getorder())
  }, []);

const [edittext, setedittext] = useState({
  name:"",
  price:"",
  image:""
});



  return (
    <div>
{orders?.map((el)=>
el?.cartItems.map((e)=>(
<div className='cardpanier'>
<img src={e?.image} alt="" />
<h1>{e?.name}</h1>
<h2>{e?.price}</h2>
<div className='btn'> 
 
<button className='buttom' onClick={()=>dispatch(deleteorder(el._id))}> Delete</button>

</div>


</div>
))
  )
}
    </div>
  )
  }
  
export default Panier
