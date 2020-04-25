var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GroupSchema = new Schema({

    id: {
        type: Number,
        required: true,
    },
    students: {
        type: Array,
        required: true
    },
    supervisor: {
        type: String,
        required: true,
    },
    doneDocs: [{
        type: Schema.Types.ObjectID,
        required: true,
        ref: "DocList "
    }]

});

module.exports=mongoose.model('group',GroupSchema);
