var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config      = require('./config/database');
mongoose.connect(config.database);

// pass passport for configuration
require('./config/passport')(passport);
 // get db config file
var User        = require('./app/models/user'); // get the mongoose model
User.findOne({name:'hello'},function(err,user)
	{	if(err) throw err;
		else
			console.log(user.name);
	})
