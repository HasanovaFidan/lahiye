const express = require('express')
const router = express.Router()
const {orderController}= require("../controller/order.controller")


router.route('/').get(orderController.getAll)
router.route('/').post(orderController.add)
router.route('/:id').get(orderController.getById)
router.route('/:id').put(orderController.edit)
router.route('/:id').delete(orderController.delete)

  
module.exports=router