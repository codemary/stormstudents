const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

/* GET contacts listing. */

router.get('/', contactController.contacts)

router.get('/:id', contactController.contact);

// post
router.post('/', contactController.createcontact);

// dalete
router.delete('/:id', contactController.deletecontact);

// update
router.put('/:id', contactController.putcontact)

module.exports = router;
