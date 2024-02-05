
const User=require("../models/lahiye.models")
const bcrypt = require('bcrypt');
const Finalcont={
    getAll:async(req,res)=>{
      try {
        const users=await User.find({})
        res.send(users)
      } catch (error) {
        res.send("error")
      }
    },
    login:async(req,res)=>{

    },
    getById:async(req,res)=>{

    },
    register:async(req,res)=>{
        const {name,email,pasword,city,mobile}=req .body
        const salt=bcrypt.genSalt(10)
        const newPassword= await bcrypt.hash(pasword,salt)
        res.send(newPassword)
    },
    delete:async(req,res)=>{},
    edit:async(req,res)=>{},
}

module.exports=Finalcont
