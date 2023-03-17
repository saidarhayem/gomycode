import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getproduct=createAsyncThunk("product/get",async()=>{
    try {
       let result= axios.get("http://localhost:5000/product/all")
       return result;
    } catch (error) {
        console.log(error)
    }
})

export const addproduct=createAsyncThunk("product/add",async(product)=>{
    try {
        let result= await axios.post("http://localhost:5000/product/add",product)
        return result
    } catch (error) {
        console.log(error)
    }
    })

    export const deleteproduct=createAsyncThunk('user/del',async (id) => {
        try {
          let result= axios.delete(`http://localhost:5000/product/${id}`);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })


      export const updtproduct=createAsyncThunk('product/updt',async ({id,product}) => {
        try {
          let result= axios.put(`http://localhost:5000/product/${id}`,product);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })



const initialState = {
  product: null,
  status:null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
    [getproduct.pending]:(state)=>{state.status="pending"},
    [getproduct.rejected]:(state)=>{state.status="failed"},
    [getproduct.fulfilled]:(state,action)=>{state.status="successful";
    state.product=action.payload.data?.product},
    [addproduct.pending]:(state)=>{state.status="pending"},
    [addproduct.fulfilled]:(state)=>{state.status="fulfilled"},
    [addproduct.rejected]:(state,action)=>{state.status="rejected"},
    [deleteproduct.fulfilled]: (state) => {state.status="successe"},
    [deleteproduct.rejected]: (state) => {state.status="failed"},
    [deleteproduct.pending]: (state) => {state.status="pending"},
    [updtproduct.fulfilled]: (state) => {state.status="successe"},
    [updtproduct.rejected]: (state) => {state.status="failed"},
    [updtproduct.pending]: (state) => {state.status="pending"},
  }
})
// Action creators are generated for each case reducer function

export default productSlice.reducer