var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */

router.get('/', userController.users)

router.get('/:userid', userController.user);

// post
router.post('/', userController.createUser);

// dalete
router.delete('/:userid', userController.deleteUser);

// update
router.put('/', userController.updateUser)

module.exports = router;
