var express = require('express');
var router=express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var User=require('../models/signUp');

router.post('/',
    [
        check("idStudent", "Please Enter a Valid StudentID").not().isEmpty(),
        check("name", "Please enter a valid Name").not().isEmpty(),
        check("password", "Please enter a valid password").isLength({min: 6})
    ],
    async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const {
        idStudent,
        name,
        password
    } = req.body;
    try {
        let user = await User.findOne({
            idStudent
        });
        if (user) {
            return res.status(400).json({
                msg: "Student ID Already Exists"
            });
        }

        user = new User({
            idStudent,
            name,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}
);


module.exports=router;
