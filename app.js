const express = require("express");
const dotenv=require('dotenv');
dotenv.config({path:"./.env"})
const PORT= process.env.PORT;
const app = express();

app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})