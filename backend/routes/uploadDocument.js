
var express = require('express');
var router=express.Router();
var uploadDocument=require('../controllers/documents');
var document = require('../models/documents');

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
 
    /*    if(!req.files) {
            res.send({
                status: false,
                message: 'No file selected'
            });
        } else */{
            //Use the name of the input field to retrieve the uploaded file
            let document = req.files.document;
            //Use the mv() method to place the file in uploads directory 
            var fullFilePath="./uploadedDocuments/" + new Date().getFullYear()+"/"+new Date().getTime()+"_"+document.name;
            document.mv(fullFilePath);
          
            var filePath=fullFilePath;
            var fileName=document.name;
            var fileSize=document.size;
            var currentDate= new Date();
            uploadDocument(filePath,fileName,fileSize,currentDate);
        
           

            //send response
            res.send({
                status: true,
                message: 'File is uploaded successfully',
                data: {
                    name: document.name,
                    mimetype: document.mimetype,
                    size: document.size
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});





module.exports=router;
