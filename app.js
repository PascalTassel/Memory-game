// Get environment variables
require('dotenv').config();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});