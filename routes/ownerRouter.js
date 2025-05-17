const express = require('express');
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/",(req,res)=>{
     res.send("its working");
})

if(process.env.NODE_ENV === "development"){
     router.post("/create" , async (req,res)=>{
          let owners = await ownerModel.find();
          if(owners.length > 0){
          return res.status(503)
          .send("you dont hava permission to not allow")
          }

          // export DEBUG=development:*
          let {fullname , email , password} = req.body;
          let createdOwner = await ownerModel.create({
               fullname,
               email,
               password,
          });
          res.status(201).sendStatus(createdOwner);
     });
}

router.get("/",(req,res)=>{
     res.send("hey , this is owner router"); 
})

module.exports = router;
