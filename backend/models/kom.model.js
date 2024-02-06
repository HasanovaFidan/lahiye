const mongoose=require("mongoose")

const Kom=mongoose.model("kom", new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    catagory:[{type:String, required:true}],
    price:{type:Number, required:true},
}))

module.exports=Kom