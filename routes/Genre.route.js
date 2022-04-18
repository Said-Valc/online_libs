const {Router} = require('express');
const {genreController} = require('../controllers/Genre.controller.js');
const router = Router();

router.get('/getGenres', genreController.getGenres);
router.post('/addGenre', genreController.addGenre);

module.exports = router;