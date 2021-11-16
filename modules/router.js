// Required modules
const express = require('express');
// Router
const router = express.Router();
// Controllers
const dataController = require('../controllers/dataController');

// Index
router.get('/', (_, response) => {
  response.render('index');
});

// Json settings file
router.get('/settings.json', (_, response) => {
  response.sendFile('settings.json', { root: '.' });
});

// Data
router.post('/data/setDb', dataController.setDb);
router.post('/data/getRanking', dataController.getRanking);
router.post('/data/getRank', dataController.getRank);
router.post('/data/setScore', dataController.setScore);

module.exports = router;