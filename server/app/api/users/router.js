const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const { User } = require('./model');

// router.get('/', (req, res, next) => {
//     console.log('Fetch all users!');
//     res.send(true);
// });
router.post('/', async (req, res, next) => {
    // App level validation
    // Check email-id existence
    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send('Email-id is already registered.');
    // Create a user instance
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
    });
    // Password should be hashed
    user.password = await bcrypt.hash(req.body.password, 10);
    // Save into database
    try{
        const result = await user.save();
        return res.status(200).send('User is successfully registered.');
    }catch(err){
        return res.status(400).send();
    }
});

module.exports = router;