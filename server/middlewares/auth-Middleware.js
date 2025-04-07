const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const mongoose = require("mongoose");

const authMiddleware = async(req,res,next)=>{
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({message: "Unauthorized access, Token not provided"});
    }
    const jwttoken = token.replace("Bearer","").trim();
    try {
        const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);
        
        const userData = await User.findOne({email: isVerified.email}).select({password:0});

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized access, Token not provided"}); 
    }
    

};
module.exports = authMiddleware;