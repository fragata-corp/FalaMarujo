const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: String,
    fone: {
      type: String,
      required: true
    },
    address: {
      street: String,
      number: String
    },
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
