var express = require('express');
var router=express.Router();
var archives = require('../models/Archives');
var templates = require('../models/Templates');
var documents = require('../models/documents');
router.get('/:type/:id',function(req,res,next){
    var ObjectId = require('mongodb').ObjectId;
    var id = req.params.id;
    var type = req.params.type;
    var docID_id = new ObjectId(id);

    switch(type) {
        case "archives":
            downloadFile(res,archives,docID_id);
            break;
        case "templates":
            downloadFile(res,templates,docID_id);
            break;
        case "documents":
            downloadFile(res,documents,docID_id);
            break;
        default:
            res.send("Unknown Table");
            res.status( 404);
    }
});


function downloadFile(res,tableName,docID_id){

    tableName.findOne({_id:docID_id} ,function(err,result){
        if (err) throw err;

        if(result&&result.filePath){
            var path= result.filePath;
            var fileName = result.fileName;
            res.download(path,fileName);
        }
        else{

            res.status( 404);
            res.send("File Not Found");
        }
    });

}

module.exports=router;