const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
    title:String,
})

const Genre = mongoose.model('genre', GenreSchema);
module.exports = Genre;