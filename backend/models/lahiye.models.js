const mongoose=require("mongoose")

const Tecnik=mongoose.model("Tecnik", new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    catagory:[{type:String, required:true}],
    prs:{type:String, required:true},
    video:{type:String, required:true},
    yaddas:{type:String, required:true},
    screen:{type:String, required:true},
    price:{type:Number, required:true},
}))

module.exports=Tecnik