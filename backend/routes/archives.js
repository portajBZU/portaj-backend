var express = require('express');
var archive = require('../models/Archives');
var router=express.Router();
var addArchive=require('../controllers/archives');

//post add Archive
router.post('/',function(req,res,next){
   
    var body=req.body;
    var archiveType=body.archiveType;
    var archiveTitle=body.archiveTitle;
   
    var yearOfthisArchive = body.yearOfthisArchive;
    var supervisodBy=body.supervisodBy;
   
    addArchive(archiveType,archiveTitle,yearOfthisArchive,supervisodBy);
    res.send(body); 
    });
router.get('/', (req, res, next) => {
    archive.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});
    module.exports=router;
