var express = require('express');
var freeTime = require('../models/freeTime');
var router=express.Router();

var addFreeTime=require('../controllers/freeTime');
//post add freeTimeForm
router.post('/',function(req,res,next){
   
    var body=req.body;
    var timeFrom =body.timeFrom;
    var timeTo = body.timeTo;
    var supervisorID=body.supervisorID;
   
    addFreeTime(timeFrom,timeTo,supervisorID);
    res.send(body); 
    });
router.get('/', (req, res, next) => {
    freeTime.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
    module.exports=router;
