import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
});

const users = new mongoose.model("users",userSchema);


module.exports = users;
