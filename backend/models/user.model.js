const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { 
      type: String,
      required: [true, "Please enter Username"],
    },

    password: {
      type: String,
      required: [true, "Please enter Password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
