var List=require('../models/DocList');
function addList (id, name , done, date){
    const list =new List({
        id:id,
        name: name,
        done: done,
        date: date,
    });
    list.save().then(function(data){
        console.log("List added");
    }).catch(function(err){
        console.log(err);
    });


}
module.exports=addList;
// module.exports=getStudents;
