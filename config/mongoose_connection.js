const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose.connect(config.get("MONGO_URI"))
.then(()=>{
     dbgr("connected");
})
.catch((err)=>{
     dbgr(err);
})

module.exports = mongoose.connection;