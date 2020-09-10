const express = require('express');
const bodyParser = require('body-parser');


const app = express();

let newItems =["Food", "Cook", "Eat"];
let newItem = '';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let date = new Date();

  let options ={
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = date.toLocaleDateString('en-US', options);

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
