var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var templatesSchema = new Schema({
templateTitle:String,
  templateType:String
  ,
  pathStored:String
});

module.exports=mongoose.model('Templates',templatesSchema);
