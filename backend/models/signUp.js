var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var signUP = new Schema({
  idStudent: Number,
  password: {type:String,unique:true},
  name: String,
  email:{type:String,unique:true},
  needPartners: Boolean,
  details: String,
  partner: String,
  partnerId: Number
});

module.exports=mongoose.model('signUP',signUP);
