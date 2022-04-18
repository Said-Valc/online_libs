const User = require('../models/User.model.js');
const Book = require('../models/Book.model.js');
module.exports.userController = {
    getUsers: async(req, res) =>{
     try{
        const result = await User.find({});
        res.json(result);
     }catch(e){
         res.json({error:e.message})
     }
    },
    addUser: async(req, res) =>{
       try{
        const {name} = req.body;
        const result = await User.create({
            name
        })
        res.json(result);
       }catch(e){   
           res.json({error:e.message});
       }
    },
    addBookRent: async(req, res) =>{
        try{
            const user = await User.findById(req.body.userId);
            const book = await Book.findById(req.body.bookId);
        if(user.isBlocked == true){
            return res.json("Такой пользователь заблокирован!");
        }
        if(book.isRent == true){
            return res.json("Книга уже арендована");
        }
        if(user.books.length == 3){
            return res.json('Больше трех книг нельзя арендовать');
        }
        await User.findByIdAndUpdate(req.body.userId,{
            $addToSet:{
                books:req.body.bookId,
            }
        })
        await Book.findByIdAndUpdate(req.body.bookId,{
            isRent: true
        })
        res.json('Книга арендована');
        }catch(e){
            res.json({error:e.message});
        }
    }
} 