var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contactController');

/* GET contacts listing. */

router.get('/', contactController.contacts)

router.get('/:id', contactController.contact);

// post
router.post('/', contactController.createcontact);

// dalete
router.delete('/:id', contactController.deletecontact);

// update
router.put('/', contactController.putcontact)

module.exports = router;
