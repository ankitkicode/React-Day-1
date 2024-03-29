// jatavankit486:ccRvMmVxZuQR7cvz
const express = require("express");
require('dotenv').config({path:"./.env"});
const PORT= process.env.PORT;
const app = express(); 
const userRouter = require('./routers/userouter');
// db connection
require("./models/dbconfig").dbconnection();
app.use(require('morgan')("tiny"))
//body parasor
app.use(express.json()); // middleware for parsing json
app.use(express.urlencoded( {extended : true} )); //middle

//userRouter kha se aaya

app.use("/api/user",userRouter);

app.all("*",(req,res,next)=>{
res.status(404).json({
    success:false,
    message:`${req.url}` + " route not found",
});
});


app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})