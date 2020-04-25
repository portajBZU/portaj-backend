var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ideaDetailsSchema = new Schema({
  
 ideaTitle:String ,
  ideaDiscription:String,
  supervisorID :Number,
});

module.exports=mongoose.model('ideaDetails',ideaDetailsSchema);
