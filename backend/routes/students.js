var express = require('express');
var Students = require('../models/Students');
var router=express.Router();

var addStudents=require('../controllers/students');
// var getStudents=require('../controllers/students');

//post add user

router.post('/',function(req,res,next){
var body=req.body;
var firstNAME =body.firstNAME;
var lastNAME = body.lastNAME;
var major=body.major;
var email=body.email;
addStudents(firstNAME,lastNAME,major,email);
res.send(body); 
});
// router.get('/',function(req,res,next){
//     getStudents();
//     res.send(body);
//     // db.collection('Students').find().toArray(function(err, results) {
//     //     console.log(results)
//         // send HTML file populated with quotes here
     
// });


module.exports=router;
