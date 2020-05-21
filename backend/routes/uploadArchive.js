var express = require('express');
var router=express.Router();
var uploadArchive=require('../controllers/archives');
var archive = require('../models/Archives');

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

// enable files upload
router.use(fileUpload({
  createParentPath: true
}));

//add other middleware
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(morgan('dev'));

router.post('/', async (req, res) => {
    try {
 
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file selected'
            });
        } else {
            //Use the name of the input field to retrieve the uploaded file
            let graduationDocument = req.files.graduationDocument;
            //Use the mv() method to place the file in uploads directory 
            var fullFilePath="./uploads/" + new Date().getFullYear()+"/"+new Date().getTime()+"_"+graduationDocument.name;
            graduationDocument.mv(fullFilePath);
          
        
            //Convert uploaded file to Text
            var textract = require('textract');
            textract.fromFileWithPath(fullFilePath, function( error, text ) 
            { 
                // console.log(text);
                var body=req.body;
                var archiveTitle =body.archiveTitle;
                var archiveType=body.archiveType;
                var supervisodBy=body.supervisodBy;
                var filePath=fullFilePath;
                var fileName=graduationDocument.name;
                var fileSize=graduationDocument.size;
                var content=text;
                var currentDate= new Date();
                uploadArchive(archiveTitle,archiveType,supervisodBy,filePath,fileName,fileSize,content,currentDate);
            })

            //send response
            res.send({
                status: true,
                message: 'File is uploaded successfully',
                data: {
                    name: graduationDocument.name,
                    mimetype: graduationDocument.mimetype,
                    size: graduationDocument.size
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
router.get('/get', (req, res, next) => {
    archive.find((err, docs) => {
        if(!err) {
            res.send(docs)
            console.log(docs)
        } else {
            res.send("Error!");
        }

    })
});

// var bodyParser = require('body-parser')
// router.use(bodyParser({uploadDir:'./uploads'}));

// var filePath="C:\\Users\\pc\\Downloads\\portaj-backend-master\\backend\\myFile.pdf";
// var textract = require('textract');
// textract.fromFileWithPath(filePath, function( error, text ) { console.log(text);})



// router.post('/', function(request, response, next){
//     var bodyarr = []
//     request.on('data', function(chunk){
//       bodyarr.push(chunk);
//     })
//     request.on('end', function(){
//       console.log( bodyarr.join('') );
//     })
// }, function(request, response) {
//     console.log('Finished Request');
// });

// exports.handleSomeEndpoint = function(request, response, next) {
//     var bodyarr = []
//     request.on('data', function(chunk){
//       bodyarr.push(chunk);
//     })
//     request.on('end', function(){
//       console.log( bodyarr.join('') );
//     })
// }

module.exports=router;