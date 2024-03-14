const express = require("express");
require('dotenv').config({path:"./.env"})
const PORT= process.env.PORT;
const app = express(); 
const userRouter = require('./routers/userouter');
// db connection
require("./models/dbconfig").dbconnection();

//body parasor
app.use(express.json()); // middleware for parsing json
app.use(express.urlencoded( {extended : true} )); //middle

//userRouter

app.use("/api/user",userRouter);


app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})