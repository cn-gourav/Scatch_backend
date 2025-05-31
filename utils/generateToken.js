const JWT = require('jsonwebtoken');
module.exports.generateToken = (user) =>{
     console.log(process.env.JWT_KEY);
     return JWT.sign({email:user.email, id:user._id}, process.env.JWT_KEY,)
};

