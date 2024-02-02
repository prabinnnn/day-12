const bookmodel = require("./book.model");
const create = (payload) => {
  return bookmodel.create(payload);
};
const get = () => {
  return bookmodel.find();
};
const getById = (id) => {
  return bookmodel.findOne(Id);
};
const updateById = (Id, payload) => {
  return bookmodel.updateOne(Id, payload);
};
const remove = (payload) => {
  return bookmodel.DeleteOne(payload);
};
module.exports = { create, get, getById, updateById, remove };
