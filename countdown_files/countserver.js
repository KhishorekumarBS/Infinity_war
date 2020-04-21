var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port        = 80;
var apiRoutes = express.Router();
var path = require('path');
app.use('/', apiRoutes);

app.set('view engine', 'ejs');
 
// log to console
app.use(express.static("public"));
app.get('*', function(req, res){
	res.render('index');
});


app.listen(port);
console.log('Countdown has started: http://localhost:' + port);