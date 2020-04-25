var freeTime=require('../models/freeTime');
function addFreeTime(timeFrom,timeTo,supervisorID ){
    const free=new freeTime({
        timeFrom:timeFrom,
        timeTo:timeTo,
        supervisorID:supervisorID,
      
    });
    free.save().then(function(data){
        console.log("freeTime added");
            }).catch(function(err){
        console.log(err);
            });
        }
    
 
        module.exports=addFreeTime;

       

   