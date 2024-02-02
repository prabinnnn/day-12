const { schema, model } = require("mongoose");
const BookSchema = schema({
  title: { type: String },
});
module.exports = model("book", BookSchema);
