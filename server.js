var express = require('express');
var app = express();
var port = 3000;
var sqlite3 = require('sqlite3');
// create new database and assign it to a variable
var db = new sqlite3.Database('HelloExpress.db');

app.listen(port, function(){
  console.log('Server is listening on port: '+port);
});


// homepage '/' GET request
app.get('/', function(){
  console.log('you found the first page');
});

// GET request
app.get('/about', function(){
  console.log('this is meant to get some info from the server');
});



// POST request
app.post('/order', function(){
  console.log('this is meant to post something');
});

// DELETE request
app.delete('/index', function(){
  console.log('this is meant to delete something');
});