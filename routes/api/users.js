const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User=require('../../models/user');



router.post('/', [

    check('name','name is required').not().isEmpty(),
    check('email','enter valid email').isEmail(),
    ] ,
    async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {name,email,password} =  req.body;   

    try {
        
        let user= await User.findOne({email});
        if(user){
            res.status(400).json({errors:[{msg:"USer already exist"}]});
        }
        user=new User({
            name,
            email,
            password
        });
        await user.save();
        res.send('User registered');

    } catch (err) {
        console.error(err.message);
        res.send(500).send('Server error');
    }


   
});

module.exports = router;