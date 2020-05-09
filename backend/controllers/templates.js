var Template=require('../models/Templates');
var Template=require('../models/Templates');
function uploadTemplate (templateTitle , templateType ,filePath ,fileName,fileSize,currentDate){
    const temp=new Template({
        templateTitle:templateTitle,
        templateType:templateType,
        filePath:filePath,
        fileName:fileName,
        fileSize:fileSize,
        currentDate:currentDate

    });
    temp.save().then(function(data){
        console.log("Template  added");
    }).catch(function(err){
        console.log(err);
    });
}
        module.exports=uploadTemplate;