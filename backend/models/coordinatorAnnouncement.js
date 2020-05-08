var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var announcment = new Schema({
  CoordinatorName:String,
  announcementID:{type:Number,unique:true},
  Title:String ,
  details:String,
  dateOfAnnouncement :Date,
  role:String

});

module.exports=mongoose.model('coordinatorAnnouncement',announcment);
