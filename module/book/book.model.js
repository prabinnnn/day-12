const { schema, model } = require("mongoose");
const BookSchema = schema({
  title: { type: String, required: true },
});
module.exports = model("book", BookSchema);
