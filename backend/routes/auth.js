const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 10); // Increase bcrypt salt rounds
    const user = new User({ email, username, password: hashpassword });
    await user.save();
    res.status(200).json({ message: "Sign Up Successful" });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

//SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found. Please Sign Up First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
