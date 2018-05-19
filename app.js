const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const PORT = 8080;
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));

// Template engine.
nunjucks.configure('templates', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('home.html');
});

app.post('/hi', (req, res) => {
  const name = req.body['name'];
  res.render('hello.html', {name: name});
})


const server = app.listen(PORT, () => {
  console.clear();
  console.log(`😎  Server listening on ${server.address().port}`);
});
