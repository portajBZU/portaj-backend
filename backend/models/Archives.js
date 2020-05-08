var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var archivesSchema = new Schema({
  archiveType:String,
  archiveTitle:String,
  yearOfthisArchive:Date ,
  supervisodBy:String
});

module.exports=mongoose.model('Archives',archivesSchema);
