var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport  = require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/userdone'); // get the mongoose model
var jwt         = require('jwt-simple');
var apiRoutes = express.Router();
var path = require('path');
var port        = 9000;
var level        = require('./app/models/stage1'); // get the mongoose model
var fs = require('fs');
var session = require("express-session");
app.use(session({secret: 'kaalakoduma'}));
var sess;

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect the api routes under /api/*
app.use('/', apiRoutes);
 
// log to console
app.use(morgan('dev'));
app.use(express.static("public"));
app.use('/css', express.static('public'))
app.use('/css/fonts', express.static('public'))
// Use the passport package in our application
app.use(passport.initialize());

mongoose.connect(config.database);
 
// pass passport for configuration

app.set('view engine', 'ejs');
 
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  if(req.session.email)
      res.redirect('/home');
  else
      res.render('index',{ message: 'Please Login to Play' });
});

app.get('/signup', function(req, res) {
  if(req.session.email)
      res.redirect('/home');
  else
      res.render('signup', { message: '' });
});

app.get('/congrats', function(req, res) {
      res.render('complete');
});

app.post('/next', function(req, res) {
    level.findOne({_id:req.session.level}, function (err, doc) {
          if (err) return next(err);
          var ans=doc.answer;
    console.log(ans);
    if(req.body.answer==ans)
    {    console.log("im in");
         var templevel=req.session.level;
         req.session.level=templevel+1;
         req.session.save();
         console.log("req.session.level:"+req.session.level);
         User.findById(req.session.email, (err, doc) => {  
         if (err) {
            console.log(err);
         } else {
            doc.level = req.session.level;
            console.log("doclevel:"+doc.level);
            doc.score = doc.score + 10;
            doc.lend = Date.now();
            console.log(doc.score);
            prscore=doc.score;
            doc.save((err, doc) => {
            if (err) {
                console.log(err);
            }
            });
            console.log("After Updation:");
          User.findOne({
             _id : req.session.email
          }, function(err, user) {
              if (err) throw err;
              console.log("user.level:"+user.level);
              console.log("req.session.level:"+req.session.level);
          });    
        }
        });
        level.findOne({_id:req.session.level}, function (err, db) {
          if (err) return next(err);
          res.json({ auth:1,img:db.storyimg,level:db._id,bgimg:db.bg,successimg:doc.successimg,scr:prscore,cl1:db.clue1,cl2:db.clue2,cl3:db.clue3,total:db.totalimg});   
        });
    }
    else
    {   res.json({ auth:0,img:doc.failureimg,successimg:doc.successimg }); 
    }
  });
});

app.post('/begin', function(req, res) {
      console.log(req.session.email);
      User.findOne  ({
             _id : req.session.email
          }, function(err, user) {
              if (err) throw err;
              console.log("user.level:"+user.level);
              req.session.level=user.level;
              console.log("req.session.level:"+req.session.level);
           req.session.name=user.name;
           req.session.score=user.score;
           req.session.avatar=user.avatar;
           
          });
    console.log("req.session.level:"+req.session.level);
        level.findOne({_id:req.session.level}, function (err, db) {
          if (err) return next(err);
          res.json({ successimg:db.successimg,bgimg:db.bg,level:db._id,scr:req.session.score,disname:req.session.name,cl1:db.clue1,cl2:db.clue2,cl3:db.clue3,total:db.totalimg,avatar:req.session.avatar});
          console.log(db.totalimg);
        });
    });

app.post('/refresh', function(req, res) {
         level.findOne({_id:req.session.level}, function (err, db) {
          if (err) return next(err);
          res.json({cl1:db.clue1,cl2:db.clue2,cl3:db.clue3});
          console.log(db.clue1);
          console.log(db.clue2);
          console.log(db.clue3);
        });
    });

app.post('/leaderboard', function(req, res) {
        User.find({}).sort({score:-1,lend: 1}).exec(function(err, docs) { 
          res.json(docs);
        });
    });

//displays the image

app.get('/view',function(req,res){
  console.log("req.session.level:"+req.session.level);
         level.findOne({_id:req.session.level}, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.question1.contentType);
          res.send(doc.question1.data);
  });
});
app.get('/view2',function(req,res){
  console.log("req.session.level:"+req.session.level);
level.findOne({_id:req.session.level}, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.question2.contentType);
          res.send(doc.question2.data);
  });
});
app.get('/view3',function(req,res){
  console.log("req.session.level:"+req.session.level);
      level.findOne({_id:req.session.level}, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.question3.contentType);
          res.send(doc.question3.data);
  });
});
// create a new user account (POST http://localhost:8080/api/signup)
app.post('/signupdone', function(req, res) {
    var newUser = new User({
      name: req.body.name,
      password: req.body.pass,
      _id: req.body.email,
      phone:req.body.phone,
      college:req.body.college,
      year:req.body.year,
      department:req.body.department,
      level:1,
      score:0,
      avatar:req.body.avatarr,
      lend:Date.now()
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        console.log(err);
        return res.render('signup', { message: 'E-mail-id already exists.  Login or use a different mail id' });
      }
      else
      {  res.redirect('/');   
      }
    });
});
 
app.get('/home', function(req, res){
  if(req.session.email)
     {      console.log(req.session.id);
            User.findOne({_id:req.session.email}, function (err, doc) {
            if (err) return next(err);
            res.render('home', { name : doc.name, level : doc.level });  
           });
      }
  else
      {   res.render('index',{ message: 'Login to continue' });
      }
});


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
app.post('/authenticate', function(req, res) {
  User.findOne({
    _id : req.body.email

  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.render('index', { message: 'Invalid Credentials. Use Mail-ID to login' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          req.session.level=user.level;
          req.session.email=user._id;
          console.log(req.session.level);
          User.findOne({_id:req.body.email}, function (err, doc) {
            if (err) return next(err);
            res.redirect('/home');
         });
         
        } else {
           res.render('index', { message: 'Invalid password.' });
        }
      });
    }
  });
});

app.get('/logout', function(req, res) {
  req.session.email=null;
  req.session.level=null;
  res.render('index',{ message:"Logged out successfully" });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


app.get('*', function(req, res){
  if(req.session.email) 
     {     res.redirect('/home');
     }
  else
      {   res.redirect('/');
      }
});


app.listen(port);
console.log('Infinity war has started: http://localhost:' + port);
