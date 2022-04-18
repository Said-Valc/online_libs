const {Router} = require('express');
const {userController} = require('../controllers/User.controller.js');
const router = Router();

router.get('/getUsers', userController.getUsers);
router.post('/addUser', userController.addUser);
router.post("/addBookRent", userController.addBookRent);
module.exports = router;