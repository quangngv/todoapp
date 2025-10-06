const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretkey = process.env.JWT_SECRET;

async function registerUser(req, res) {
    let {firstName,lastName,username,password} = req.body;
    try{
        const duplicate = await User.find({username});
        if(duplicate && duplicate.length > 0) {
            return res.status(400).send({message:"Username already reigistered with this username"});
        }
        let user = new User({firstName,lastName,username,password});
        const result = await user.save();
        console.log(result);
        res.status(201).send({message:"User registered successfully"});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send({ message: "Username not found" });
        }

        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).send({ message: "Password is incorrect" });
        }
        let token = jwt.sign({ userId: user._id }, secretkey, { expiresIn: '1h' });
        const finalData = {
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token
        };

        res.send(finalData);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

    const AuthController = { 
    registerUser
    ,loginUser  
}

module.exports = AuthController;

