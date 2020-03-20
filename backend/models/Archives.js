var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var archivesSchema = new Schema({
  nameOFreport:String,
  yearOfthisArchive:Date ,
  supervisodBy:String
});

module.exports=mongoose.model('Archives',archivesSchema);
