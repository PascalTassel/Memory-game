// Required modules
const express = require('express');
const router = require('./modules/router');

// Server
const app = express();
// Templating
app.set('view engine', 'ejs');
app.set('views', './views');
// Assets path
app.use(express.static('./assets'));
// POST vars
app.use(express.urlencoded({extended: true}));
// Routes
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});