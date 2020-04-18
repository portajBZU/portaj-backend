var express = require('express');
var router=express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var User=require('../models/signUp');
const auth = require("../middleware/auth");
router.post('/',
    [
     check("idStudent", "Please enter a valid Student ID").not().isEmpty(),
     check("password", "Please enter a valid password").isLength({
      min: 6
     })
    ],
    async (req,res,next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       return res.status(400).json({
        errors: errors.array()
       });
      }
      const { idStudent, password } = req.body;
      try {
       let user = await User.findOne({
           idStudent
       });

          console.log(user);
       if (!user)
        return res.status(400).json({
         message: "User Not Exist"
        });

       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch)
        return res.status(400).json({
         message: "Incorrect Password !"
        });
       const payload = {
        user: {
         id: user.id
        }
       };
       jwt.sign(
           payload,
           "secret",
           {
            expiresIn: 3600
           },
           (err, token) => {
            if (err) throw err;
            res.status(200).json({
             token
            });
           }
       );
      } catch (e) {
       console.error(e);
       res.status(500).json({
        message: "Server Error"
       });
      }
     }
);

router.get("/user", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});
module.exports=router;
