var express = require('express');
var supervisor = require('../models/Supervisors');

var router=express.Router();

var addSupervisor=require('../controllers/supervisors');

//post add supervisor
router.post('/',function(req,res,next){
    var body=req.body;
    var supervisorID =body.supervisorID;
    var supervisorFirstName = body.supervisorFirstName;
    var supervisorLastName=body.supervisorLastName;
    var numberOfGroups=body.numberOfGroups;
    addSupervisor(supervisorID,supervisorFirstName,supervisorLastName,numberOfGroups);
    res.send(body); 
    });

    //update supervisor
    router.put('/:id',function(req,res,next){
        supervisor.findByIdAndUpdate({_id: req.params.id},req.body).then(function(supervisor){
            res.send(supervisor);
        });
    });
router.get('/', (req, res, next) => {
    supervisor.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
    module.exports=router;
