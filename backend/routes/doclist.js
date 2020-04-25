var express = require('express');

var router=express.Router();
var doc = require('../models/DocList');
var addList=require('../controllers/doclist');


router.post('/',function(req,res,next){
    var body=req.body;
    var id =body.id;
    var name = body.name;
    var done=body.done;
    var date = body.date;
    addList(id,name,done,date);
    res.send(body);
});
router.get('/', (req, res, next) => {
    doc.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
module.exports=router;
