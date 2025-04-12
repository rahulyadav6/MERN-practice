const User = require("../models/user-model");
const bcrypt = require('bcrypt');
const home = async(req, res) => {
    try{
        res.status(200).send("welcome to homepage");
    }catch(error){
        res.status(500).send("Internal server error");
    }
};

const register = async(req,res)=>{
    try{
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email })
        if(userExist){
            return res.status(400).json({message: "Email already exists"});
        }
        
        //hash the password
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        
        const userCreated = await User.create({ username, email, phone, password:hashedPassword });
        
        res.status(201).json({
            msg:  "User registered successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }catch(error){
        // res.status(500).send("Internal server error");
        next(error);    
    }
}

const login = async(req, res, next)=>{
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        
        if(!userExist){
            const error = new Error("Invalid Credentials");
            error.status = 400;
            return next(error);
        }
        
        // const user = await bcrypt.compare(password, userExist.password);
        
        // complicated method of doing same thing i,e comparing password
        const isMatch = await userExist.comparePassword(password);
        
        if(!isMatch){
            const error = new Error("Invalid email or password");
            error.status = 401;
            return next(error); 
        }
        // throw new Error();
        // console.log(userExist);
        
        res.status(200).json({
            msg: "Login successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
        });

    }catch(error){
        // return res.status(500).json({"error": "Internal server error"});
        next(error);
    }
}

// to send user data
const user = async(req,res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user }; 