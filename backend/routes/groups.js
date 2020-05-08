var express = require('express');
var group = require('../models/group')
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
router.get('/', (req, res, next) => {
    group.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
module.exports=router;
