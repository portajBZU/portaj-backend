var groups=require('../models/group');
function addGroup (id, students , supervisor, doneDocs){
    const group =new groups({
        id:id,
        students: students,
        supervisor: supervisor,
        doneDocs: doneDocs,
    });
    group.save().then(function(data){
        console.log("group added");
    }).catch(function(err){
        console.log(err);
    });


}
module.exports=addGroup;
// module.exports=getStudents;
