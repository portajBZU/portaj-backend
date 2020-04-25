var express = require('express');

var router=express.Router();

var addGroup=require('../controllers/groups');


router.post('/',function(req,res,next){
    var body=req.body;
    var id =body.id;
    var students = body.students;
    var supervisor=body.supervisor;
    var doneDocs = body.doneDocs;
    addGroup(id,students,supervisor,doneDocs);
    res.send(body);
});

module.exports=router;
