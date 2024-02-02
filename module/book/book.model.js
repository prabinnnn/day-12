const { schema, model } = require("mongoose");
const BookSchema = schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  pageno: { type: Number, required: true },
  updatedat: { type: Date, default: Date.now() },
  createdat: { type: Date, default: Date.now() },
});
module.exports = model("book", BookSchema);
