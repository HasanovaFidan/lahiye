const express = require("express");
const dotenv=require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config()
const PORT = process.env.PORT
const productRouter=require("./router/lahiye.routes")

app.use(express.json());
app.use(cors())
app.use("/products",productRouter)
app.listen(PORT, () => {
    console.log("server connection PORT");
});

mongoose.connect("mongodb+srv://fedans:salam123@cluster0.qpbyyy4.mongodb.net/").then(res=>{
    console.log("mongo");
})