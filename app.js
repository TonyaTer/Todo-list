const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const newItems =["Food", "Cook", "Eat"];
const workItems = [];
let newItem = '';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('list', {listTitle: date.getDate(), newListItems: newItems});
});

app.get('/work', function(req, res){
  res.render('list', {listTitle: "Work List", newListItems: workItems});
});

app.get('/about', function(req, res){
  res.render('about');
});

app.post('/', function(req, res){
  newItem = req.body.newItem;
    if(req.body.list === 'Work'){
      workItems.push(newItem);
      res.redirect('work');
    }else{
      newItems.push(newItem);
      res.redirect('/');
    }
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
