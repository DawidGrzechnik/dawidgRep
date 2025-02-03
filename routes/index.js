const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.get('/cennik', PagesController.cennik);
router.get('/login', PagesController.login);
router.get('/edit', PagesController.edit);
router.post('/add', ApplicationsController.postServices);
router.get('/view', ApplicationsController.view);

router.post('/applications', ApplicationsController.store);

module.exports = router;