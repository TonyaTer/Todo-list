const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var date = new Date();
  var currrentDay = date.getDay();
  var day = '';
  switch(currrentDay){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Hmm.. Something went wrong. It seems like there's " + currrentDay + " days");
      break;
  }


  res.render('list', {day: day});
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
