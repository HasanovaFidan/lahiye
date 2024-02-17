const mongoose=require("mongoose")

const Order=mongoose.model("Order", new mongoose.Schema({
name:String,
email: {
    type: String,
    required: true,
    unique: true
},
mobile:Number,
city:String,
status:{
type:String,
default:"Pending"
}


}))

module.exports=Order