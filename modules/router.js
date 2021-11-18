// Required modules
const express = require('express');
// Router
const router = express.Router();
// Controllers
const dataController = require('../controllers/dataController');

// Index
router.get('/', (_, response) => {
  response.sendFile('index.html', { root: '.' });
});

// Json settings file
router.get('/settings.json', (_, response) => {
  response.sendFile('settings.json', { root: '.' });
});

// Favicon
router.get('/favicon.ico', (_, response) => {
  response.sendFile('favicon.ico', { root: '.' });
});

// Assets files
router.get('/assets/:dir/:file', (request, response) => {
  const {dir, file} = request.params;
  response.sendFile(`assets/${dir}/${file}`, { root: '.' });
});

// Data
router.get('/data/setDb', dataController.setDb);
router.post('/data/getRanking', dataController.getRanking);
router.post('/data/getRank', dataController.getRank);
router.post('/data/saveScore', dataController.saveScore);

// 404
router.use((_, response) => {
  response.status(404).send('404 error, page not found !');
});

module.exports = router;