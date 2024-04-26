const express = require("express");

const mongoose = require("mongoose");
const userRouter = require("./routes/user");
require("dotenv").config();

const User = require("./models/user");
const app = express();

app.use(express.json());
app.use(userRouter);

mongoose
  .connect(process.env.MONGOURL, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});
app.listen(5000, () => {
  console.log("Server started");
});
