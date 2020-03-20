var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
  
 studentID:Number ,
  password:{type:String,unique:true}
});

module.exports=mongoose.model('login',loginSchema);
