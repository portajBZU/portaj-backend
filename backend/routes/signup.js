var express = require('express');
var router=express.Router();

var addUser=require('../controllers/signup');


router.post('/',function(req,res,next){
var body=req.body;
var name =body.name;
var password = body.password;
var idStudent =body.idStudent;
addUser(name,password,idStudent);
res.send(body); 
});


module.exports=router;
