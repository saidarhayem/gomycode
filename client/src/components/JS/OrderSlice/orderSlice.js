import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getorder=createAsyncThunk("order/get",async()=>{
    try {
       let result= axios.get("http://localhost:5000/order")
       return result;
    } catch (error) {
        console.log(error)
    }
})

export const addorder=createAsyncThunk("order/add",async(order)=>{
    try {
        let result= await axios.post("http://localhost:5000/order/add",order)
        return result
    } catch (error) {
        console.log(error)
    }
    })

    export const deleteorder=createAsyncThunk('order/del',async (id) => {
        try {
          let result= axios.delete(`http://localhost:5000/order/${id}`);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })


      export const updtorder=createAsyncThunk('order/updt',async ({id,order}) => {
        try {
          let result= axios.put(`http://localhost:5000/person/put/${id}`,order);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })



const initialState = {
  order: null,
  status:null
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers:{
    [getorder.pending]:(state)=>{state.status="pending"},
    [getorder.rejected]:(state)=>{state.status="failed"},
    [getorder.fulfilled]:(state,action)=>{state.status="successful";
    state.order=action.payload.data?.orders},
    [addorder.pending]:(state)=>{state.status="pending"},
    [addorder.fulfilled]:(state)=>{state.status="fulfilled"},
    [addorder.rejected]:(state,action)=>{state.status="rejected"},
    [deleteorder.fulfilled]: (state) => {state.status="successe"},
    [deleteorder.rejected]: (state) => {state.status="failed"},
    [deleteorder.pending]: (state) => {state.status="pending"},
    [updtorder.fulfilled]: (state) => {state.status="successe"},
    [updtorder.rejected]: (state) => {state.status="failed"},
    [updtorder.pending]: (state) => {state.status="pending"},
  }
})
// Action creators are generated for each case reducer function

export default orderSlice.reducer