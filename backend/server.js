const express = require("express");
const cors = require("cors");
const path = require("path");
const authRouter = require("./routes/auth");
const conn = require("./conn/conn");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
conn();

// Routes
app.use("/api/v1", authRouter);

// Serve static files from React app
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// Serve React app for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
