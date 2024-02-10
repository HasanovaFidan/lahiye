const mongoose=require("mongoose")

const Tecnik=mongoose.model("Tecnik", new mongoose.Schema({
    image:{type:String},
    name:{type:String,},
    catagory:[{type:String, required:true}],
    brand:[{type:String, required:true}],
    prs:{type:String},
    video:{type:String},
    yaddas:{type:String},
    screen:{type:String},
    system:{type:String},
    alis:{type:Number},
    endirim:{type:Number},
    satis:{type:Number}

}))

module.exports=Tecnik