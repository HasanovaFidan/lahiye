const mongoose=require("mongoose")

const Tecnik=mongoose.model("Tecnik", new mongoose.Schema({
    image:String,
    name:String,
    prs:String,
    video:String,
    price:Number,
}))

module.exports=Tecnik