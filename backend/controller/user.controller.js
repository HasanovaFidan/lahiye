const { User } = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
const mail = nodemailer.createTransport({
    direct: true,
    host: 'smtp.gmail.com',
    auth: {
        user: 'tu64upm8q@code.edu.az',
        pass: 'txqo qcbq wrog jszd'
    },
    secure: true
})

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send("Error fetching users");
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send("User not found");
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send("Invalid password");
      }
      res.status(200).send({
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
        token: await generateToken({
          _id: user._id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          isAdmin: user.isAdmin,
        })
      });
    } catch (error) {
      res.status(500).send("Error logging in");
    }
  },
  register: async (req, res) => {
    try {
      const { name, surname, email, password, isAdmin } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        surname,
        isAdmin,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).send({
        _id: newUser._id,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        password: newUser.password,
        isAdmin: newUser.isAdmin,
        token: await generateToken({
          _id: newUser._id,
          name: newUser.name,
          surname: newUser.surname,
          email: newUser.email,
          password: newUser.password,
          isAdmin: newUser.isAdmin,
        })
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, surname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.findByIdAndUpdate(id, {
        name,
        surname,
        email,
        password: hashedPassword,
      });
      res.status(200).send("User updated successfully")
    } catch (error) {
      res.status(500).send("Error updating user")
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).send("User deleted successfully")
    } catch (error) {
      res.status(500).send("Error deleting user")
    }
  },
  sendMail:(req,res)=>{
    const messagge=req.body.messagge
    const mailAddress=req.body.mailAddress
    console.log(messagge,mailAddress)
    const mailOptions = {
        from: 'tu64upm8q@code.edu.az',
        to: mailAddress,
        subject: 'Test Mail',
        text: 'Hello World',
        html:`<html>${messagge}</html>`
    }
    
    mail.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }else{
            console.log(info)
            res.json("success")
        }
    })
}
  
};

const generateToken = async ({
  _id, name, surname, email, password, isAdmin,
}) => {
  return jwt.sign({ _id, name, surname, email, password, isAdmin, }, "Muku", {
    expiresIn: "1h",
  })
}
module.exports = { userController };