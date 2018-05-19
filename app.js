const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

// Template engine.
nunjucks.configure('templates', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('home.html');
});


const server = app.listen(PORT, () => {
  console.clear();
  console.log(`😎  Server listening on ${server.address().port}`);
});
