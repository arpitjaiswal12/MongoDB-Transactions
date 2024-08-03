const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { name, email, contact_no, balance } = req.body;

  if (!name || !balance) {
    return res.status(400).json({ message: "Name and balance are required" });
  }

  try {
    const newUser = new User({ name, email, contact_no, balance });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

