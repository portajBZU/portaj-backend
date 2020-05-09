var express = require('express');
var templates = require('../models/Templates');
var router=express.Router();


//post add template
router.post('/',function(req,res,next){
     var body=req.body;
    const template=new template({
 templateTitle:"INTRO proposal",
 templateType:"AI",
 pathStored:"WWW.propsalas.com"
    });
    template.save().then(function(data){
        console.log("template added");
            }).catch(function(err){
        console.log(err);
            });
res.send(body); 
});
module.exports=router;