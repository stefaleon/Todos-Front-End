var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var todoRoutes = require('./routes/todos');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../'));

app.get('/', function(req, res) {
  res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log(`App running on port ${port}.`);
});
