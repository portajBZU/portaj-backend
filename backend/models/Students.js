var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentsSchema = new Schema({
  firstNAME:String,
  lastNAME:String,
  major:String,
  email:{type:String,unique:true}
});

module.exports=mongoose.model('Students',studentsSchema);
