const { Order } = require("../models/order.models")
const OrderController = {
    getAll: async (req, res) => {
        try {
            const target = await Order.find({}).populate('items')
            res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const alinino = await Order.findById(id)
            res.send(alinino)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    Post: async (req, res) => {
        try {
            const { name, mobile, city, email, items } = req.body
            console.log(req.body)
            const newProduct = new Order({ name, mobile, city, email, items })
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            console.log(error)
            res.send("item is not a fount")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { name, mobile, city, email, status } = req.body
            //    await Alinino.findByIdAndUpdate(id,{name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar})
            await Order.findByIdAndUpdate(id, { name, mobile, city, email, status })
            res.send("item updated")
        } catch (error) {
            res.send("item is not a fount")
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Order.findByIdAndDelete(id)
            res.send("deleted")
        } catch (error) {
            res.send("item is not a fount")
        }
    },

}
module.exports = { OrderController }