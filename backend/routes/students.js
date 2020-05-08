var express = require('express');
var Students = require('../models/Students');
var router=express.Router();

var addStudents=require('../controllers/students');

//post add user
router.post('/',function(req,res,next){
var body=req.body;
var name =body.name;
var studentId=body.studentId;
var groupDetails = body.groupDetails;
addStudents(name,studentId,groupDetails);
res.send(body); 
});
  //update student
  router.put('/:id',function(req,res,next){
    Students.findByIdAndUpdate({_id: req.params.id},req.body).then(function(Students){
        res.send(Students);
    });
});

router.get('/', (req, res, next) => {
    Students.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});

module.exports=router;
