var login=require('../models/login');
function addUserLogin (studentID, password ){
    const user=new login({
        studentID: studentID ,
        password: password
    });
    user.save().then(function(data){
        console.log("successful");
    }).catch(function(err){
        console.log(err);
    });
}

module.exports=addUserLogin;
