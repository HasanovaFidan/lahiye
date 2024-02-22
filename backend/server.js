const express = require("express");
const dotenv=require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config()
const PORT = process.env.PORT
const userRoutes=require("./router/user.routes")
const technicalRouter=require("./router/lahiye.routes")
const orderRoutes = require("./router/order.routes");
const PaymentRouter=require("./router/payment.routes")


app.use(express.json());
app.use(cors())
app.use("/technical",technicalRouter)
app.use("/users",userRoutes)
app.use("/orders", orderRoutes);
app.use("/payment",PaymentRouter)

app.listen(PORT, () => {
    console.log("server connection PORT");
});

mongoose.connect("mongodb+srv://fedans:salam123@cluster0.qpbyyy4.mongodb.net/").then(res=>{
    console.log("mongo");
})