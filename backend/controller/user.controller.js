const { User } = require("../models/user.models");
const bcrypt = require("bcrypt");

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
      res.status(200).send("Login successful");
    } catch (error) {
      res.status(500).send("Error logging in");
    }
  },
  register: async (req, res) => {
    try {
      const { name, mobile, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        mobile,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).send("User created successfully");
    } catch (error) {
      res.status(500).send("Error creating user");
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, mobile, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.findByIdAndUpdate(id, {
        name,
        mobile,
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
};
module.exports = { userController };