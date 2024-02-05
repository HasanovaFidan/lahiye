const Tecnik=require("../models/lahiye.models")


const tecnikController={
    getAll:async (req,res)=>{
        try {
            const cards=await Tecnik.find({})
            res.send(cards)
        } catch (error) {
            res.send("err")
        }
    },
    getById:async (req,res)=>{
        try {
            const{id}=req.params
            const target=await Tecnik.findById(id)
            res.send(target)
        } catch (error) {
            res.send("err")
        }
    },
     add:async (req,res)=>{
        try {
            const {icon,name,desc,price}=req.body
            const newTecnik= new Tecnik ({icon,name,desc,price})
           await newTecnik.save()
           res.send("created")
        } catch (error) {
            res.send("err")
        }
    },
    edit: async (req,res)=>{
      try{
  const {id}=req.params
  const {title,price,description,image}=req.body
  const update= await Card.findByIdAndUpdate(id,{title,price,description,image})
  res.send(201).send(" Product update")
      } 
      catch(error){
          res.status(404).send("DATA NOT FOUND")
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

module.exports=tecnikController