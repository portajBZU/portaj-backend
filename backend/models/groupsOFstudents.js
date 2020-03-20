var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var groupOfstudentsSchema = new Schema({
  groupID:{type:Integer,unique:true},
  projectTitle:String ,
  firstStudentName:String,
  secondStudentName :String,
  thirdStudentName:String
});

module.exports=mongoose.model('groupOfStudents',groupOfstudentsSchema);
