var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET contacts listing. */

router.get('/', userController.users)

router.get('/:id', userController.user);

// post
router.post('/', userController.createUser);

// dalete
router.delete('/', userController.deleteUser);

// update
router.put('/', userController.putUser);

module.exports = router;
