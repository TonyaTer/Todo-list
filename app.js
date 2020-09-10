const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var date = new Date();
  var currrentDay = date.getDay();
  var day = '';
  if(currrentDay === 0 || currrentDay === 6){
    day = 'Weekend';
  }else{
    day = 'Weekday';
  }

  res.render('list', {day: day});
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
