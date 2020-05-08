var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentsSchema = new Schema({
  name: String,
    studentId: Number,
    groupDetails: String

});

module.exports=mongoose.model('Students',studentsSchema);
