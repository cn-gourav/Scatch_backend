const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
     if(!req.cookes.token){
          req.flash("error", "You must be logged in to access this resource");
          return res.redirect("/");
     }

     try{
          let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
          let user = await userModel
          .findOne({email: decoded.email})
          .select("-password");

          req.user = user;

          next();
     }catch(err){
          req.flash("error", "Invalid token, please log in again");
          return res.redirect("/");
     }
}