const express = require("express");
require('dotenv').config({path:"./.env"})
const PORT= process.env.PORT;
const app = express(); 
// db connection
require("./models/dbconfig").dbconnection();



app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})