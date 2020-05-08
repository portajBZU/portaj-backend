var express = require('express');
var announcement = require('../models/coordinatorAnnouncement');
var router=express.Router();
var addAnnouncement=require('../controllers/announcements');
router.post('/',function(req,res,next){
    var body=req.body;
    var CoordinatorName =body.CoordinatorName;
    var announcementID = body.announcementID;
    var Title=body.Title;
    var details=body.details;
    var dateOfAnnouncement=body.dateOfAnnouncement;
    var role=body.role;
    addAnnouncement(CoordinatorName,announcementID,Title,details,dateOfAnnouncement,role);
    res.send(body); 
    });

       //update announcement
  router.put('/:id',function(req,res,next){
    announcement.findByIdAndUpdate({_id: req.params.id},req.body).then(function(announcement){
        res.send(announcement); 
    });
});

    module.exports=router;
    