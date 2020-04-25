var Template=require('../models/Templates');
function uploadTemplate (templateTitle , templateType , pathStored){
    const temp=new Template({
        templateTitle:templateTitle,
        templateType:templateType,
        pathStored:pathStored,
      
    });
    temp.save().then(function(data){
        console.log("Template  added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=uploadTemplate;