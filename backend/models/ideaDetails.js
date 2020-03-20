var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ideaDetailsSchema = new Schema({
  
 ideaTitle:String ,
  ideaDiscription:String,
  supervisorID :integer,
});

module.exports=mongoose.model('ideaDetails',ideaDetailsSchema);
