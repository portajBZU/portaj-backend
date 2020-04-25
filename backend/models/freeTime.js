var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var freeTimeSchema = new Schema({
  timeFrom:Date,
  timeTo:Date ,
  supervisorID:Number 
});

module.exports=mongoose.model('freeTime',freeTimeSchema);
