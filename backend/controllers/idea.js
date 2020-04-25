
var idea=require('../models/ideaDetails');
function addIdea (ideaTitle , ideaDiscription , supervisorID){
    const ideaInfo=new idea({
        ideaTitle:ideaTitle,
        ideaDiscription:ideaDiscription,
        supervisorID:supervisorID
    });
    ideaInfo.save().then(function(data){
        console.log("idea added");
            }).catch(function(err){
        console.log(err);
            });
}

module.exports=addIdea;