const express= require("express")
const router = express.Router(); 
const productRouter=express.Router()
const product=require('../models/product')




//post new user
productRouter.post('/add',async(req,res)=>{
    try {
       let x =   new product(req.body)
       let result= await x.save()
      res.send({product:result,msg:"product added successfully"})
    } catch (error) {
        console.log(error)
    }
})
// GET all product
productRouter.get('/all',async(req,res)=>{
    try {
        let result= await product.find()
      res.send({product:result,msg:"product list"})
    } catch (error) {
        console.log(error)
    }
})
//GET product by id
productRouter.get('/:id',async(req,res)=>{
    try {
        let result= await product.findById({_id:req.params.id})
      res.send({product:result,msg:"product recherched"})
    } catch (error) {
        console.log(error)
    }
})
//delete bi id
productRouter.delete('/:id',async(req,res)=>{
    try {
        let result= await product.findByIdAndDelete({_id:req.params.id})
      res.send({msg:"product is removed"})
    } catch (error) {
        console.log(error)
    }
})
//update product
productRouter.put('/:id',async(req,res)=>{
    try {
        let result= await product.findByIdAndUpdate({_id:req.params.id},
            {$set:{...req.body}}
            );
      res.send({msg:"product is update"})
    } catch (error) {
        console.log(error)
    }
})

module.exports= productRouter