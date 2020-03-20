var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var signUP = new Schema({
  
 studentID:integer ,
  password:password,
  email:{type:String,unique:true},
  firstName:String,
  lastName:String,
  userName:{type:String,unique:true},
  DOB:Date,
  numberOfPartners:integer
});

module.exports=mongoose.model('signUP',signUP);
