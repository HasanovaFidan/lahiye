const Order=require("../models/order.models")


const OrderController={
    getAll:async (req,res)=>{
        try {
            const cards=await Order.find({})
            res.send(cards)
        } catch (error) {
            res.send("err")
        }
    },
    getById:async (req,res)=>{
        try {
            const{id}=req.params
            const target=await Order.findById(id)
            res.send(target)
        } catch (error) {
            res.send("err")
        }
    },
     add:async (req,res)=>{
        try {
            const {name,email,mobile,city,status}=req.body
            const newOrder= new Order ({name,email,mobile,city,status})
           await newOrder.save()
           res.send(newOrder)
        } catch (error) {
            res.send(error)
        }
    },
    edit: async (req,res)=>{
      try{
  const {id}=req.params
  const {name,email,mobile,city,status}=req.body

  const update= await Tecnik.findByIdAndUpdate(id,{name,email,mobile,city,status})
  res.send(201).send(update)
      } 
      catch(error){
          res.status(404).send(error)
      }
  },
    delete:async (req,res)=>{
        try {
            const{id}=req.params
            const deletedTarget=await Tecnik.findByIdAndDelete(id)
            res.send(deletedTarget)
        } catch (error) {
            res.send("err")
        }
    },
}

module.exports=OrderController