var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({

studentID: {
  type: String,
  unique: true,
  required: true,
  trim: true
 },
 password: {
  type: String,
  required: true,
 }
});

module.exports=mongoose.model('login',loginSchema);
