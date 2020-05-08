var Archives=require('../models/Archives');
function addArchive (archiveType,archiveTitle , yearOfthisArchive , supervisodBy){
    const archive=new Archives({
        archiveType:archiveType,
        archiveTitle:archiveTitle,
        yearOfthisArchive:yearOfthisArchive,
        supervisodBy:supervisodBy,
      
    });
    archive.save().then(function(data){
        console.log("archive added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=addArchive;