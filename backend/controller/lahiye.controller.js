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
            const {image,name,prs,catagory,video,yaddas,screen,price}=req.body
            const newTecnik= new Tecnik ({image,name,prs,catagory,video,yaddas,screen,price})
           await newTecnik.save()
           res.send(newTecnik)
        } catch (error) {
            res.send("err")
        }
    },
    edit: async (req,res)=>{
      try{
  const {id}=req.params
  const {image,name,prs,catagory,video,yaddas,screen,price}=req.body

  const update= await Card.findByIdAndUpdate(id,{image,name,catagory,prs,video,yaddas,screen,price})
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