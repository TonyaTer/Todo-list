const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send('<h1>Listening</h1>');
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
