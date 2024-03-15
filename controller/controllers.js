const User = require("../models/usermodel");

exports.homeRoute = (req, res) => {
    res.status(200).json({success:true, message: 'Welcome to the API' });
}



exports.createUser = async (req, res) => {
    try {
        // Create a new user based on the request body
        const newUser = new User(req.body);
        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json({ success: true, user: savedUser });
    } catch (error) {
        if (error.code === 11000) {
            // If the error is a duplicate key error (MongoError code 11000), handle it
            res.status(400).json({ success: false, error: 'Duplicate key error' });
        } else {
            // For other errors, send a generic error response
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}