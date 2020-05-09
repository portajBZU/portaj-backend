var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var templatesSchema = new Schema({
  templateTitle:String,
  templateType:String ,
  filePath:String,
  fileName:String,
  fileSize:Number,
  currentDate:Date
});

module.exports=mongoose.model('Templates',templatesSchema);
