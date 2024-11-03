const express = require("express");
const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const payload = req.body;

  try {
    email = payload.email;
    let useremail =await UserModel.findOne({ email });
    if (useremail) {
      return res.status(401).send({ msg: "Email!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(payload.password, salt);
    payload.password = hashedPass;

    const user = new UserModel(payload);
    user.save();
    res.send({ msg: "User registered successfully!", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ msg: "Wrong Email!" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).send({ msg2: "Wrong Password!" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username:user.username },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.send({ msg: "Login Successful", token: token, username:user.username });
    console.log(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});



module.exports = { userRouter };