var express = require('express');
var templates = require('../models/Templates');
var router=express.Router();
var uploadTemplate=require('../controllers/templates');

//post upload template
router.post('/',function(req,res,next){
   
        var body=req.body;
        var templateTitle =body.templateTitle;
        var templateType = body.templateType;
        var pathStored=body.pathStored;
       
        uploadTemplate(templateTitle,templateType,pathStored);
        res.send(body); 
        });

router.get('/', (req, res, next) => {
        templates.find((err, docs) => {
                if(!err) {
                        res.send(docs)
                        console.log(docs)
                } else {
                        res.send("Error!");
                }

        })
});
        module.exports=router;
