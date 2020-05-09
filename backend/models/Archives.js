var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var archivesSchema = new Schema({
  archiveTitle:String,
  archiveType:String,
  supervisodBy:String,
  filePath:String,
  fileName:String,
  fileSize:Number,
  content:String,
  currentDate:Date
});

module.exports=mongoose.model('Archives',archivesSchema);
