var express = require('express');
var router=express.Router();
var archives = require('../models/Archives');

router.get('/:key',function(req,res,next){
    var body= req.params;
    var key = body.key;
    //full text search for archives table
    archives.find({$text: {$search:key}},function(err,result){
        console.log(key)
        if (err) throw err;
        res.send(result);
    });

//regex search on all the columns in archives table 
// archives.find({$or:[
//                     {archiveTitle: {$regex:new RegExp('.*'+key+'.*','i')}},
//                     {archiveType: {$regex:new RegExp('.*'+key+'.*','i')}},
//                     {supervisodBy: {$regex:new RegExp('.*'+key+'.*','i')}}
//                 ]}, function(err,result){
//     if (err) throw err;
//         res.send(result);
// });
});


module.exports=router;