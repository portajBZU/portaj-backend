var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var documentsSchema = new Schema({
 
  filePath:String,
  fileName:String,
  fileSize:Number,
  currentDate:Date
});

module.exports=mongoose.model('documents',documentsSchema);
