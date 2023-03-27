const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide an Name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    phone: {
        type: Number,
        required: [true, "Please provide an Phone!"],
        unique: [true, "Phone Exist"],
    },
  
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
  })

  module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);