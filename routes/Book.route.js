const {Router} = require('express');
const {bookController} = require('../controllers/Book.controller.js'); 
const router = Router();

router.get('/getBooks', bookController.getBooks);
router.post('/addBook', bookController.addBooks);
router.post('/addReview', bookController.addReview);
router.patch('/getBooksGenre/:genreId', bookController.getBooksByGenre);
router.patch('/getBookById/:bookId', bookController.getBookById);

module.exports = router;