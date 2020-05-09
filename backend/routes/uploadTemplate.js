
var express = require('express');
var router=express.Router();
var uploadTemplate=require('../controllers/templates');
var template = require('../models/Templates');

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
            let templateDocument = req.files.templateDocument;
            //Use the mv() method to place the file in uploads directory 
            var fullFilePath="./uploadedTemplates/" + new Date().getFullYear()+"/"+new Date().getTime()+"_"+templateDocument.name;
            templateDocument.mv(fullFilePath);
          

            var body=req.body;
            var templateTitle =body.templateTitle;
            var templateType=body.templateType;
            var filePath=fullFilePath;
            var fileName=templateDocument.name;
            var fileSize=templateDocument.size;
            var currentDate= new Date();
            uploadTemplate(templateTitle,templateType,filePath,fileName,fileSize,currentDate);
        
           

            //send response
            res.send({
                status: true,
                message: 'File is uploaded successfully',
                data: {
                    name: templateDocument.name,
                    mimetype: templateDocument.mimetype,
                    size: templateDocument.size
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});





module.exports=router;
