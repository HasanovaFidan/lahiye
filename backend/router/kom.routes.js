const express = require('express')
const router = express.Router()
const KomController=require("../controller/kom.controller")

router.get("/",KomController.getAll)
router.get("/:id",KomController.getById)
router.post("/",KomController.add)
router.put("/:id",KomController.edit)
router.delete("/:id",KomController.delete)


module.exports=router