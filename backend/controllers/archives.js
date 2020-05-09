var Archives=require('../models/Archives');
function addArchive (archiveTitle,archiveType  , supervisodBy,filePath,fileName,fileSize,content,currentDate){
    const archive=new Archives({
        archiveTitle:archiveTitle,
        archiveType: archiveType,
        supervisodBy:supervisodBy,
        filePath:filePath,
        fileName:fileName,
        fileSize:fileSize,
        content:content,
        currentDate:currentDate

    });

    archive.save().then(function(data){
        console.log("archive added");
    }).catch(function(err){
        console.log(err);
    });
}
 
        module.exports=addArchive;