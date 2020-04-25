var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var supervisorsSchema = new Schema({
  
supervisorID:{type:Number},
  supervisorFirstName:String,
  supervisorLastName:String,
  numberOfGroups:Number
});

module.exports=mongoose.model('supervisors',supervisorsSchema);
