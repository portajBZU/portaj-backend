var document=require('../models/documents');
function uploadDocument (filePath ,fileName,fileSize,currentDate){
    const doc=new document({
      
        filePath:filePath,
        fileName:fileName,
        fileSize:fileSize,     
        currentDate:currentDate
      
    });
    doc.save().then(function(data){
        console.log("document  added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=uploadDocument;