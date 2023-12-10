const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const User = require("../models/userschema");

router.get('/', function (req, res) {
    res.send("Hello world! router");
});
// promises
// router.post("/register",  (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill in all the properties" });
//     }
//     User.findOne({email: email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "email already exist"})
//         }

//         const user = new User({name , email,phone, work , password, cpassword });
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered succesfully"});
//         }).catch((err)=> res.status(500).json({error:"FAILED TO REGISTERED"}))
//     }).catch(err=>{console.log(err);});



// });



router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the properties" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Email already exists" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });




            await user.save();

            res.status(201).json({ message: "User registered successfully" });
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to register user" });
    }
});


router.post("/signin", async (req, res) => {
    // console.log(req.body)
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: "Please fill in the data" });
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin); 
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000 ),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({ err: "INVALID CREDENTIALS PASS" });
            } else {
                res.json({ message: "Signin Successful" });
            }
        } else {
            res.status(400).json({ err: "INVALID CREDENTIALS" });
        }















    } catch (err) {
        console.log(err);

    }
});


module.exports = router;
