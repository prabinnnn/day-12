require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(procee.env.PORT);
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
app.use(express.json());
app.use((err, res, next, req) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: err });
});
app.listen(PORT, () => {
  console.log("app is runing");
});
