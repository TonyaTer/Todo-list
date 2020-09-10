const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var newItems =[];
var newItem = '';

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var date = new Date();

  var options ={
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = date.toLocaleDateString('en-US', options);

  res.render('list', {day: day, newListItems: newItems});
});

app.post('/', function(req, res){
  newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect('/');
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
