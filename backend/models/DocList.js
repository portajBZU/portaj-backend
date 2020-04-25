var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DocListSchema = new Schema({

   id: {
       type: Number,
       required: true,
   },
    name: {
       type: String,
        required: true,
    },
    done: {
       type: Number,
        required: true,
    },
    date: {
       type: String,
        required: true,
    }


});

module.exports=mongoose.model('DocList',DocListSchema);
