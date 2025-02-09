const expres = require('express');
const router = expres.Router();
const { registerUser } = require('../controllers/userController');

router.route('/register').post(registerUser);


module.exports = router;