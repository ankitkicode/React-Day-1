const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
   username:{
    type:String,
    trim:true,
    unique:true,
    required:[true,"Username is required"],
    minlength:[3,"Username minimum length is 3 characters"]
   },
   email:{
    type:String,
    required:[true,"Email address is required!"],
    lowercase:true,
    match:[/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Please provide a valid email address"]
   },
   password:{
    type:String,
    required:[true,"Password is required"],
    minlength:[3, "Password minimum length is 6 characters"],
    maxlength:[20, "Password maximum length is 20 characters"]
   }
},{ timestamps: true });

module.exports = mongoose.model("User",userModel);
