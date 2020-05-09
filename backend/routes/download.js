var express = require('express');
var router=express.Router();
var archives = require('../models/Archives');
var templates = require('../models/Templates');
var documents = require('../models/documents');
router.get('/:id',function(req,res,next){
var ObjectId = require('mongodb').ObjectId; 
var id = req.params.id;       
var docID_id = new ObjectId(id);

//search in archives table
archives.findOne({_id:docID_id} ,function(err,result){
    if (err) throw err;
    
    if(result&&result.filePath){
        var path= result.filePath;
        var fileName = result.fileName;
        res.download(path,fileName);
    }  
    else{
        //search in templates table
        templates.findOne({_id:docID_id} ,function(err,result){
            if (err) throw err;
            
            if(result&&result.filePath){
                var path= result.filePath;
                var fileName = result.fileName;
                res.download(path,fileName);
            }
            else {
                //search in documents table
                documents.findOne({_id:docID_id} ,function(err,result){
                    if (err) throw err;
                    
                    if(result&&result.filePath){
                        var path= result.filePath;
                        var fileName = result.fileName;
                        res.download(path,fileName);
                    }
                    else{ 
                       
                        res.status( 404);
                    }
                });

            }
        });

       
    }
   });

});

module.exports=router;