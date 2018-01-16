const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');

app.use(volleyball);
app.use(express.static("public"));
app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.listen(3000);
