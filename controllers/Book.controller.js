const Book = require('../models/Book.model.js');

module.exports.bookController = {
    getBooks: async(req, res) =>{
        try{
            const result = await Book.find({});
            res.json(result);
        }catch(e){
           res.json({error:e.message});
        }
    },

    getBooksByGenre:async(req, res) =>{

        try{
            const result = await Book.find({genre:req.params.genreId})
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    getBookById: async(req, res) =>{
        try{
            const result = await Book.find({_id:req.params.bookId})
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    addBooks: async(req, res) =>{
        try{
            const {title, genre, review} = req.body;
            const result = await Book.create({
                title,
                genre,
                review
            })
            res.json(`Добавлена запись - ${result}`);
        }catch(e){
            res.json({error:e.message})
        }
    },

    addReview: async(req, res) =>{
        try{
            const {id, review, userId} = req.body;
            const result = await Book.findByIdAndUpdate(req.body.id, {
                $push: {
                  review,
                  userId
                },
              });
              res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    }
}