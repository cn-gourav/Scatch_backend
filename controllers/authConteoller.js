const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");


module.exports.register = async(req, res) => {
  try{
     const { fullname, email, password } = req.body;
     let user = await userModel.findOne({ email });
     if (  user) {
          return res.status(400).send("User already exists");
     }

     bcrypt.genSalt(10, async (err, salt) => {
     bcrypt.hash(password, salt, async (err, hash) => {
          if (err)  return res.send(err.message);
          else {
          let user =  await userModel.create({
               email,
               password : hash,
               fullname,
          })

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User registered successfully");
          }
          });
     });
     } catch(err){
     res.send(err.message);
     }
}

module.exports.loginUser = async(req, res) => {
     let { email, password } = req.body;
     let user = await userModel.findOne({ email });
     if (!user) {
          return res.status(400).send("Email or password is incorrect");
     }

     bcrypt.compare(password, user.password, (err, result) => {
     if(result) {
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User logged in successfully");
     }
     else {
          return res.status(400).send("Email or password is incorrect");   
     }
     })
}