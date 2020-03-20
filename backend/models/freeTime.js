var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var freeTimeSchema = new Schema({
  timeFrom:TimeRanges,
  timeTo:TimeRanges ,
  supervisorID:Integer 
});

module.exports=mongoose.model('freeTime',freeTimeSchema);
