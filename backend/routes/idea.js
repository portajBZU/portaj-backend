var express = require('express');
var idea = require('../models/ideaDetails');
var router=express.Router();

var addIdea=require('../controllers/idea');

//post add idea
router.post('/',function(req,res,next){
    var body=req.body;
    var ideadId = body.ideadId;
    var ideaTitle =body.ideaTitle;
    var ideaDiscription = body.ideaDiscription;
    var supervisorID=body.supervisorID;
    var ideaStatus = body.ideaStatus;
    
    addIdea(ideadId, ideaTitle, ideaStatus, ideaDiscription,supervisorID);
    res.send(body); 
    });
     //update idea
  router.put('/:id',function(req,res,next){
    idea.findByIdAndUpdate({_id: req.params.id},req.body).then(function(idea){
        res.send(idea);
    });
});

    module.exports=router;