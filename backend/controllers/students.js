var Students=require('../models/Students');
function addStudent (firstNAME , lastNAME , major,email){
    const student=new Students({
        firstNAME:firstNAME,
        lastNAME:lastNAME,
        major:major,
        email:email
    });
    student.save().then(function(data){
console.log("student added");
    }).catch(function(err){
console.log(err);
    });
   

}
// function getStudents (){
//     var cursor = db.collection('quotes').find().then(function(data){
//         console.log("data viewd");
//     })
    

//     .catch(function(err){
// console.log(err);
//     });
   

// }
module.exports=addStudent;
// module.exports=getStudents;