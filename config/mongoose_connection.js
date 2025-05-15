const mongoose = require("mongoose");
const dbgr = require("debug")("devlopment:mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/macro")
.then(()=>{
     dbgr("connected");
})
.catch((err)=>{
     console.log(err);
})

module.exports = mongoose.connection;