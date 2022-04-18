const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:String,
    genre:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"genres"
    },
    review:String,
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"users",

    },
    isRent:
        {
            type:Boolean,
            default: false
        }
    
})

const Book = mongoose.model("book", BookSchema);

module.exports = Book;