var Supervisors=require('../models/Supervisors');
function addSupervisor (supervisorID , supervisorFirstName , supervisorLastName,numberOfGroups,registeredGroups){
    const supervisor=new Supervisors({
        supervisorID:supervisorID,
        supervisorFirstName:supervisorFirstName,
        supervisorLastName:supervisorLastName,
        numberOfGroups:numberOfGroups,
        registeredGroups: registeredGroups,
      //  ideaList: ideaList
    });
    supervisor.save().then(function(data){
        console.log("supervisor added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=addSupervisor;