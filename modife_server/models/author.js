const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Auther',authorSchema);