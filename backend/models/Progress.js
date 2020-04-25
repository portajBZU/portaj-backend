var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProgressSchema = new Schema({

    groupId: {
        type: Number,
        required: true,
    },

    docList: {
        type: Schema.Types.ObjectID,
        required: true,
    }

});

module.exports=mongoose.model('Progress',ProgressSchema);
