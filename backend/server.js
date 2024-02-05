
const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const routes=require("./router/lahiye.routes")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/users",routes)

mongoose.connect(process.env.DB_URL).then(res=>{
    console.log("mongo db connected")

})
app.listen(8080,()=>{
    console.log("port connected")
})