const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
app.use(express.json());
app.use("/", indexofrouter);
app.use((err, res, next, req) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: err });
});
app.listen(8000, () => {
  console.log("app is runing");
});
