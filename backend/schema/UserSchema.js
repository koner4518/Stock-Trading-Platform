const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = UserSchema;