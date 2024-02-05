const express = require('express')
const router = express.Router()

const finalCont=require("../controller/lahiye.controller")


router.get("/",finalCont.getAll)
router.get("/:id",finalCont.getById)
router.get("/login",finalCont.login)
router.post("/register",finalCont.register)
router.delete("/:id",finalCont.delete)


module.exports=router