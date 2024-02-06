const express = require("express");
const dotenv=require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config()
const PORT = process.env.PRT
const komRouter=require("./router/kom.routes")

app.use(express.json());
app.use(cors())
app.use("/kom",komRouter)
app.listen(8000, () => {
    console.log("server connection PORT two");
});

mongoose.connect("mongodb+srv://fedans:salam123@cluster0.qpbyyy4.mongodb.net/").then(res=>{
    console.log("mongo two");
})