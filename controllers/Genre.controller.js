const Genre = require('../models/Genre.model.js');

module.exports.genreController = {

    getGenres: async(req, res) =>{
        try{
            const result = await Genre.find({});
        }catch(e){
            res.json({error:e.message})
        }
    },

    addGenre: async(req, res) =>{
        try{
            const {title} = req.body;
            const result = await Genre.create({
                title
            })
            res.json(`Добавлена запись - ${result}`);
        }catch(e){
            res.json({error:e.message})
        }
    },

    
}