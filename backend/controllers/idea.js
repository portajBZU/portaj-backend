
var idea=require('../models/ideaDetails');
function addIdea (ideadId, ideaTitle , ideaStatus, ideaDiscription , supervisorID){
    const ideaInfo=new idea({
        ideadId: ideaId,
        ideaTitle:ideaTitle,
        ideaStatus: ideaStatus,
        ideaDiscription:ideaDiscription,
        supervisorID:supervisorID,
    });
    ideaInfo.save().then(function(data){
        console.log("idea added");
            }).catch(function(err){
        console.log(err);
            });
}

module.exports=addIdea;