const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();

var locals = {
  title: 'Our nunjucks example',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Sam'}
  ]
};

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


app.use(volleyball);

app.get('/', function (req, res){
  res.render( 'index', locals);
})


app.listen(3000);
