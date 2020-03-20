var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
  
 studentID:integer ,
  password:password
});

module.exports=mongoose.model('login',loginSchema);
