// Required modules
const express = require('express');
// Router
const router = express.Router();
// Controllers
const dataController = require('../controllers/dataController');

// Index
router.get('/', (_, response) => {
  //response.render('index');
  response.sendFile('index.html', { root: '.' });
});

// Json settings file
router.get('/settings.json', (_, response) => {
  response.sendFile('settings.json', { root: '.' });
});

// Assets files
router.get('/assets/:dir/:file?', (request, response) => {
  const {dir, file} = request.params;

  response.sendFile(`assets/${dir}/${file}`, { root: '.' });
});

// Data
router.get('/data/setDb', dataController.setDb);
router.post('/data/getRanking', dataController.getRanking);
router.post('/data/getRank', dataController.getRank);
router.post('/data/setScore', dataController.setScore);

module.exports = router;