const {Router} = require('express');

const router = Router();

router.use(require('./Book.route.js'));
router.use(require('./Genre.route.js'));
router.use(require('./User.route.js'));

module.exports = router;