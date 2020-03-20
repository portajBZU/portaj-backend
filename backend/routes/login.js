var express = require('express');
var router=express.Router();

var addUserLogin=require('../controllers/login');


router.post('/',function(req,res,next){
var body=req.body;
var password = body.password;
var idStudent =body.idStudent;
addUserLogin(idStudent,password);
res.send(body); 
});


module.exports=router;
