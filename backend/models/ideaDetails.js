var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ideaDetailsSchema = new Schema({
  ideadId: Number,
 ideaTitle:String ,
    ideaStatus: String,
  ideaDiscription:String,
  supervisorID :Number,
});

module.exports=mongoose.model('ideaDetails',ideaDetailsSchema);
