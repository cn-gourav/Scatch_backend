const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/macro");

const userSchema = new mongoose.Schema({
     fullname: String,
     email: String,
     password: String,
     card: {
          type: Array,
          default: [],
     },
     isadmin: Boolean,
     order: {
          type: Array,
          default: [],
     },
     contact: Number,
     picture: String,
});

module.exports = mongoose.model("user", userSchema);