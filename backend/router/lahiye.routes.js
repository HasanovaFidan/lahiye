const express = require('express')
const router = express.Router()
const tecnikController=require("../controller/lahiye.controller")

router.get("/",tecnikController.getAll)
router.get("/:id",tecnikController.getById)
router.post("/",tecnikController.add)
router.put("/:id",tecnikController.edit)
router.delete("/:id",tecnikController.delete)


module.exports=router