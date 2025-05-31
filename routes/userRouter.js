const express = require('express');
const router = express.Router();
const { register , loginUser } = require("../controllers/authConteoller");


router.get("/",(req,res)=>{
     res.send("Hey i am user router");
})

router.post("/register", register);

router.post("/login", loginUser);
module.exports = router;