var User=require('../models/signUp');
function addUser (name , password , idStudent){
    const user=new User({
    name: name,
    password: password,
    idStudent: idStudent
    });
    user.save().then(function(data){
        console.log("successful");
    }).catch(function(err){
        console.log(err);
    });
   
}

module.exports=addUser;