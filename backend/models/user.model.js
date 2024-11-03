const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };
