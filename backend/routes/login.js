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

router.get("/:id", async (req, res) => {
    // Retrieve the tag from our URL path
    var id = req.params.id;

    let articles = await User.find({idStudent: id},function(err,result){
        console.log(id)
        if (err) throw err;
        res.send(result);
    });

    res.render('tag', {
        articles: articles
    });
});
module.exports=router;
