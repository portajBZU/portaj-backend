var express = require('express');
var announcement = require('../models/coordinatorAnnouncement');
var router=express.Router();
var addAnnouncement=require('../controllers/announcements');
router.post('/',function(req,res,next){
    var body=req.body;
    var CoordinatorName =body.CoordinatorName;
    var announcementID = body.announcementID;
    var Title=body.Title;
    var bodyMSG=body.bodyMSG;
    var dateOfAnnouncement=body.dateOfAnnouncement;
    var email=body.email;
    var role=body.role;
    addAnnouncement(CoordinatorName,announcementID,Title,bodyMSG,dateOfAnnouncement,email,role);
    res.send(body); 
    });

       //update announcement
  router.put('/:id',function(req,res,next){
    announcement.findByIdAndUpdate({_id: req.params.id},req.body).then(function(announcement){
        res.send(announcement); 
    });
});
router.get('/', (req, res, next) => {
    announcement.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
    module.exports=router;
