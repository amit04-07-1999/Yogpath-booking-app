const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("mongodb+srv://Yogpath:9315264682@yogpath.p5a42fs.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Atlas MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
