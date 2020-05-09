var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var supervisorsSchema = new Schema({
  
supervisorID:{type:Number},
  supervisorFirstName:String,
  supervisorLastName:String,
  numberOfGroups:Number,
  registeredGroups: Number,
  /*ideaList: [{
    type: Schema.Types.ObjectID,
    required: true,
    ref: "ideaDetails "
  }]*/
});

module.exports=mongoose.model('supervisors',supervisorsSchema);
