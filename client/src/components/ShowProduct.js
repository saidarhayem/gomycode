import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getproduct } from './JS/productSlice/productSlice';
import ProductsCard from './ProductsCard';

const ShowProduct = () => {
  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(getproduct())
  }, []);
  const products=useSelector((store)=>store.product?.product)
  console.log(products)
  return (
    <div className='careeee'>
      {products?.map((e)=>(<ProductsCard product={e} />))}
    </div>
  )
}

export default ShowProduct
