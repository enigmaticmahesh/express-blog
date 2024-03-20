const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const PORT = process.env.PORT || 5000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.html');
});

app
  .listen(PORT, () => {
    console.log('Blog is running on PORT: ', PORT);
  })
  .on('error', (err) => {
    console.log('Error while starting your blog: ', err);
  });
