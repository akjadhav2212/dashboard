const express = require('express');
const indexRouter = express.Router();
const {z, Schema} = require('zod')
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema.model');
const Product = require('../models/productSchema.model')
const authMiddleware = require('../middleware/authMiddleware');

// health check route
indexRouter.get("/health",(req, res)=>{
    res.status(200).json({
        "sucess":true,
        "message":"I am healthy"
    })
});

// check user authenticated
indexRouter.get('/authuser',authMiddleware,(req,res)=>{
    return res.status(200).json({
        "success":true,
        "message":"authenticated user"
    })
})


const signupBody = z.object({
    username: z.string().min(3),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    password: z.string().min(6),
});

// user signup
indexRouter.post("/signup",async (req, res)=>{
    const objd = signupBody.safeParse(req.body)
    if(objd.success){
        const username = req.body.username;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        
        //check user 
        const existingUser = await User.findOne({username});
        console.log(existingUser)
        if(existingUser){
            return res.status(403).json({
                success:false,
                message:"User already exists"
            })
        }
        const newUser = new User({
            username,
            password,
            firstname,
            lastname
        })
        newUser.save();
        return res.status(200).json({
            success:true,
            message:"User created"
        });
    }
    return res.status(411).json({
        success:false,
        message:"Invalid input" 
    })
})

const signinbody = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});

// user login
indexRouter.post("/signin",async (req, res)=>{
    const objd = signinbody.safeParse(req.body);
    if(objd.success){
        const username = req.body.username;
        const password = req.body.password;
        const existingUser = await User.findOne({username});
        if(existingUser){
            if(existingUser.password === password){
                const token = jwt.sign({userid:existingUser._id},process.env.JWT_SECRET);
                return res.status(200).json({
                    success:true,
                    message:"Login successful",
                    token
                })
            }
            return res.status(411).json({
                success:false,
                message:"Incorrect password"
            })
        }
        return res.status(411).json({
            success:false,
            message:"User does not exist"
        })
    }
    return res.status(411).json({
        success:false,
        message:"Invalid input" 
    })
});

const updatePasswordBody = z.object({
    oldPassword: z.string().min(6),
    newPassword: z.string().min(6),
});

// update password
indexRouter.put("/updatepassword",authMiddleware, async(req,res)=>{
    const objd = updatePasswordBody.safeParse(req.body);
    if(objd.success){
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
        const userid = req.headers.userId;

        const existingUser = await User.findOne({_id:userid});
        if(existingUser){
            if(existingUser.password === oldPassword){
                existingUser.password = newPassword;
                existingUser.save();
                return res.status(200).json({
                    success:true,
                    message:"Password updated"
                })
            }
            return res.status(411).json({
                success:false,
                message:"Old Password doesn't match"
            })
        }
        return res.status(411).json({
            success:false,
            message:"User does not exist"
        })

    }
    return res.status(411).json({
        success:false,
        message:"Invalid input" 
    })
})

// get product
indexRouter.get('/getproduct',authMiddleware,async(req, res)=>{
    const productcount = await Product.countDocuments();
    const product = await Product.aggregate(
        [ { $sample: { size: 1 } } ]
     )
    console.log(product);
    return res.status(200).json({
        success:true,
        product
    })
})

module.exports = indexRouter