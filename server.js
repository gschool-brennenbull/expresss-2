var express = require('express');
var app = express();
app.get('/api', function(reg,res){
  res.send('hello from api');
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('./index');
});

app.use(function(req,res){
  res.status(404).send('404 not found ');
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
