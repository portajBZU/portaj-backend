var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var supervisorsSchema = new Schema({
  
supervisorID:{type:integer ,unique:true},
  supervisorFirstName:string,
  supervisorLastName:string,
  numberOfGroups:integer
});

module.exports=mongoose.model('supervisors',supervisorsSchema);
