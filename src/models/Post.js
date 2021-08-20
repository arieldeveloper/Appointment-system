const mongoose = require('mongoose');

//Schema
const PostSchema = mongoose.Schema( {
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

//Export
module.exports = mongoose.model('Posts', PostSchema);