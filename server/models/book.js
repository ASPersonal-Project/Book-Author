const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type:String
    },
    gener:{
        type:String
    },
    authorId:{
        type:String
    }
});

module.exports = mongoose.model('Book',bookSchema);