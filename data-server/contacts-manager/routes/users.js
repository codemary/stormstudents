const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/* GET contacts listing. */

// router.get('/', userController.users)

router.get('/', userController.user);

// post
// router.post('/', userController.createUser);

// router.post('/signup', userController.signupUser);
// router.post('/login', userController.loginUser);

// dalete
router.delete('/', userController.deleteUser);

// update
router.put('/', userController.putUser);

module.exports = router;
