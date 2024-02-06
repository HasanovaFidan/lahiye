const Kom=require("../models/kom.model")


const KomController={
    getAll:async (req,res)=>{
        try {
            const cards=await Kom.find({})
            res.send(cards)
        } catch (error) {
            res.send("err")
        }
    },
    getById:async (req,res)=>{
        try {
            const{id}=req.params
            const target=await Kom.findById(id)
            res.send(target)
        } catch (error) {
            res.send("err")
        }
    },
     add:async (req,res)=>{
        try {
            const {image,name,prs,catagory,video,yaddas,screen,price}=req.body
            const newKom= new Kom ({image,name,prs,catagory,video,yaddas,screen,price})
           await newKom.save()
           res.send(newKom)
        } catch (error) {
            res.send("err")
        }
    },
    edit: async (req,res)=>{
      try{
  const {id}=req.params
  const {image,name,prs,catagory,video,yaddas,screen,price}=req.body

  const update= await Kom.findByIdAndUpdate(id,{image,name,catagory,prs,video,yaddas,screen,price})
  res.send(201).send(update)
      } 
      catch(error){
          res.status(404).send("DATA NOT FOUND")
      }
  },
    delete:async (req,res)=>{
        try {
            const{id}=req.params
            const deletedTarget=await Kom.findByIdAndDelete(id)
            res.send(deletedTarget)
        } catch (error) {
            res.send("err")
        }
    },
}

module.exports=KomController