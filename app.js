const express = require('express');
const app = express();
const db = require("./config/mongoose_connection");    
const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const cookieParser = require('cookie-parser');
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(expressSession({
     secret: process.env.EXPRESS_SESSION_SECRET,
     resave: false,
     saveUninitialized: false,
}));

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
     res.send("Welcome to the E-commerce API");
})



app.use("/owners", ownerRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);



app.listen(3000,()=>{
     console.log("listening on port 3000");
})