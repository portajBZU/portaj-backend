var Supervisors=require('../models/Supervisors');
function addSupervisor (supervisorID , supervisorFirstName , supervisorLastName,numberOfGroups){
    const supervisor=new Supervisors({
        supervisorID:supervisorID,
        supervisorFirstName:supervisorFirstName,
        supervisorLastName:supervisorLastName,
        numberOfGroups:numberOfGroups
    });
    supervisor.save().then(function(data){
        console.log("supervisor added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=addSupervisor;