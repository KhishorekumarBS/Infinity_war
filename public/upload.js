  var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var level        = require('./app/models/stage1'); // get the mongoose model
var config      = require('./config/database'); // get db config file
mongoose.connect(config.database);


console.error('mongo is open');
//////////////////////////level1
    var a1 = new level;
    a1._id=1;
    a1.question1.data = fs.readFileSync('public/questions/q11.png');
    a1.question1.contentType = 'image/png';
    a1.question2.data = fs.readFileSync('public/questions/q11.png');
    a1.question2.contentType = 'image/png';
    a1.question3.data = fs.readFileSync('public/questions/q11.png');
    a1.question3.contentType = 'image/png';
    a1.hero='antman';
    a1.clue1="0";
    a1.clue2="0";
    a1.clue3="0";
    a1.answer="level1";
    a1.bg="bg1.jpg";
    a1.totalimg=1;
    a1.successimg="success/level1success.jpg";
    a1.failureimg="fail/level1fail.jpg";
    a1.save(function (err, a1) {
      if (err) throw err;
      console.error('saved img to mongo');
      });

///////////////////////////////level2
var a2 = new level;
a2._id=2;
a2.question1.data = fs.readFileSync('public/questions/q21.png');
a2.question1.contentType = 'image/png';
a2.question2.data = fs.readFileSync('public/questions/q22.png');
a2.question2.contentType = 'image/png';
a2.question3.data = fs.readFileSync('public/questions/q22.png');
a2.question3.contentType = 'image/png';
a2.hero='antman';
a2.clue1="0";
a2.clue2="0";
a2.clue3="0";
a2.answer="level2";
a2.bg="bg2.jpg";
a2.totalimg=2;
a2.successimg="success/level2success.jpg";
a2.failureimg="fail/level2fail.jpg";
a2.save(function (err, a2) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
//////////////////////level3
var a3 = new level;
a3._id=3;
a3.question1.data = fs.readFileSync('public/questions/q31.png');
a3.question1.contentType = 'image/png';
a3.question2.data = fs.readFileSync('public/questions/q32.png');
a3.question2.contentType = 'image/png';
a3.question3.data = fs.readFileSync('public/questions/q33.png');
a3.question3.contentType = 'image/png';
a3.hero='antman';
a3.clue1="0";
a3.clue2="0";
a3.clue3="0";
a3.answer="level3";
a3.bg="bg3.jpg";
a3.totalimg=3;
a3.successimg="success/level3success.jpg";
a3.failureimg="fail/level3fail.jpg";
a3.save(function (err, a3) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
  /////////////////////level4
  var a4 = new level;
  a4._id=4;
  a4.question1.data = fs.readFileSync('public/questions/q41.png');
  a4.question1.contentType = 'image/png';
  a4.question2.data = fs.readFileSync('public/questions/q42.png');
  a4.question2.contentType = 'image/png';
  a4.question3.data = fs.readFileSync('public/questions/q42.png');
  a4.question3.contentType = 'image/png';
  a4.hero='antman';
  a4.clue1="0";
  a4.clue2="0";
  a4.clue3="0";
  a4.answer="level4";
  a4.bg="bg4.jpg";
  a4.totalimg=2;
  a4.successimg="success/level4success.jpg";
  a4.failureimg="fail/level4fail.jpg";
  a4.save(function (err, a4) {
    if (err) throw err;
    console.error('saved img to mongo');
    });
    ////////////////level5
    var a5 = new level;
    a5._id=5;
    a5.question1.data = fs.readFileSync('public/questions/q51.png');
    a5.question1.contentType = 'image/png';
    a5.question2.data = fs.readFileSync('public/questions/q52.png');
    a5.question2.contentType = 'image/png';
    a5.question3.data = fs.readFileSync('public/questions/q53.png');
    a5.question3.contentType = 'image/png';
    a5.hero='antman';
    a5.clue1="0";
    a5.clue2="0";
    a5.clue3="0";
    a5.answer="level5";
    a5.bg="bg5.jpg";
    a5.totalimg=3;
    a5.successimg="success/level5success.jpg";
    a5.failureimg="fail/level5fail.jpg";
    a5.save(function (err, a5) {
      if (err) throw err;
      console.error('saved img to mongo');
      });
///////////////////level6
var a6 = new level;
a6._id=6;
a6.question1.data = fs.readFileSync('public/questions/q61.jpg');
a6.question1.contentType = 'image/jpg';
a6.question2.data = fs.readFileSync('public/questions/q62.jpg');
a6.question2.contentType = 'image/jpg';
a6.question3.data = fs.readFileSync('public/questions/q62.jpg');
a6.question3.contentType = 'image/jpg';
a6.hero='antman';
a6.clue1="0";
a6.clue2="0";
a6.clue3="0";
a6.answer="level6";
a6.bg="bg6.jpg";
a6.totalimg=2;
a6.successimg="success/level6success.jpg";
a6.failureimg="fail/level6fail.jpg";
a6.save(function (err, a6) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
////////////////////level7
var a7 = new level;
a7._id=7;
a7.question1.data = fs.readFileSync('public/questions/q71.jpg');
a7.question1.contentType = 'image/jpg';
a7.question2.data = fs.readFileSync('public/questions/q71.jpg');
a7.question2.contentType = 'image/jpg';
a7.question3.data = fs.readFileSync('public/questions/q71.jpg');
a7.question3.contentType = 'image/jpg';
a7.hero='antman';
a7.clue1="0";
a7.clue2="0";
a7.clue3="0";
a7.answer="level7";
a7.bg="bg7.jpg";
a7.totalimg=1;
a7.successimg="success/level7success.jpg";
a7.failureimg="fail/level7fail.jpg";
a7.save(function (err, a7) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
//////////////////level8
var a8 = new level;
a8._id=8;
a8.question1.data = fs.readFileSync('public/questions/q81.jpg');
a8.question1.contentType = 'image/jpg';
a8.question2.data = fs.readFileSync('public/questions/q82.jpg');
a8.question2.contentType = 'image/jpg';
a8.question3.data = fs.readFileSync('public/questions/q82.jpg');
a8.question3.contentType = 'image/jpg';
a8.hero='antman';
a8.clue1="0";
a8.clue2="0";
a8.clue3="0";
a8.answer="level8";
a8.bg="bg8.jpg";
a8.totalimg=2;
a8.successimg="success/level8success.jpg";
a8.failureimg="fail/level8fail.jpg";
a8.save(function (err, a8) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
////////////////////////level9
var a9 = new level;
a9._id=9;
a9.question1.data = fs.readFileSync('public/questions/q91.jpg');
a9.question1.contentType = 'image/jpg';
a9.question2.data = fs.readFileSync('public/questions/q91.jpg');
a9.question2.contentType = 'image/jpg';
a9.question3.data = fs.readFileSync('public/questions/q91.jpg');
a9.question3.contentType = 'image/jpg';
a9.hero='antman';
a9.clue1="0";
a9.clue2="0";
a9.clue3="0";
a9.answer="level9";
a9.bg="bg9.jpg";
a9.totalimg=1;
a9.successimg="success/level9success.jpg";
a9.failureimg="fail/level9fail.jpg";
a9.save(function (err, a9) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level10
var a10 = new level;
a10._id=10;
a10.question1.data = fs.readFileSync('public/questions/q101.jpg');
a10.question1.contentType = 'image/jpg';
a10.question2.data = fs.readFileSync('public/questions/q102.jpg');
a10.question2.contentType = 'image/jpg';
a10.question3.data = fs.readFileSync('public/questions/q102.jpg');
a10.question3.contentType = 'image/jpg';
a10.hero='antman';
a10.clue1="0";
a10.clue2="0";
a10.clue3="0";
a10.answer="level10";
a10.bg="bg10.jpg";
a10.totalimg=2;
a10.successimg="success/level10success.jpg";
a10.failureimg="fail/level10fail.jpg";
a10.save(function (err, a10) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level11
var a11 = new level;
a11._id=11;
a11.question1.data = fs.readFileSync('public/questions/q111.jpg');
a11.question1.contentType = 'image/jpg';
a11.question2.data = fs.readFileSync('public/questions/q112.jpg');
a11.question2.contentType = 'image/jpg';
a11.question3.data = fs.readFileSync('public/questions/q113.jpg');
a11.question3.contentType = 'image/jpg';
a11.hero='antman';
a11.clue1="0";
a11.clue2="0";
a11.clue3="0";
a11.answer="level11";
a11.bg="bg11.jpg";
a11.totalimg=3;
a11.successimg="success/level11success.jpg";
a11.failureimg="fail/level11fail.jpg";
a11.save(function (err, a11) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
  ///////////////////level12
  var a12 = new level;
  a12._id=12;
  a12.question1.data = fs.readFileSync('public/questions/q121.jpg');
  a12.question1.contentType = 'image/jpg';
  a12.question2.data = fs.readFileSync('public/questions/q121.jpg');
  a12.question2.contentType = 'image/jpg';
  a12.question3.data = fs.readFileSync('public/questions/q121.jpg');
  a12.question3.contentType = 'image/jpg';
  a12.hero='antman';
  a12.clue1="0";
  a12.clue2="0";
  a12.clue3="0";
  a12.answer="level12";
  a12.bg="bg12.jpg";
  a12.totalimg=1;
  a12.successimg="success/level12success.jpg";
  a12.failureimg="fail/level12fail.jpg";
  a12.save(function (err, a12) {
    if (err) throw err;
    console.error('saved img to mongo');
    });
/////////////////////level13
var a13 = new level;
a13._id=13;
a13.question1.data = fs.readFileSync('public/questions/q131.jpg');
a13.question1.contentType = 'image/jpg';
a13.question2.data = fs.readFileSync('public/questions/q132.jpg');
a13.question2.contentType = 'image/jpg';
a13.question3.data = fs.readFileSync('public/questions/q133.jpg');
a13.question3.contentType = 'image/jpg';
a13.hero='antman';
a13.clue1="0";
a13.clue2="0";
a13.clue3="0";
a13.answer="level13";
a13.bg="bg13.jpg";
a13.totalimg=3;
a13.successimg="success/level13success.jpg";
a13.failureimg="fail/level13fail.jpg";
a13.save(function (err, a13) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
///////////////////////level14
var a14 = new level;
a14._id=14;
a14.question1.data = fs.readFileSync('public/questions/q141.jpg');
a14.question1.contentType = 'image/jpg';
a14.question2.data = fs.readFileSync('public/questions/q142.jpg');
a14.question2.contentType = 'image/jpg';
a14.question3.data = fs.readFileSync('public/questions/q142.jpg');
a14.question3.contentType = 'image/jpg';
a14.hero='antman';
a14.clue1="0";
a14.clue2="0";
a14.clue3="0";
a14.answer="level14";
a14.bg="bg14.jpg";
a14.totalimg=2;
a14.successimg="success/level14success.jpg";
a14.failureimg="fail/level14fail.jpg";
a14.save(function (err, a14) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level15
var a15 = new level;
a15._id=15;
a15.question1.data = fs.readFileSync('public/questions/q151.jpg');
a15.question1.contentType = 'image/jpg';
a15.question2.data = fs.readFileSync('public/questions/q151.jpg');
a15.question2.contentType = 'image/jpg';
a15.question3.data = fs.readFileSync('public/questions/q151.jpg');
a15.question3.contentType = 'image/jpg';
a15.hero='antman';
a15.clue1="0";
a15.clue2="0";
a15.clue3="0";
a15.answer="level15";
a15.bg="bg15.jpg";
a15.totalimg=1;
a15.successimg="success/level15success.jpg";
a15.failureimg="fail/level15fail.jpg";
a15.save(function (err, a15) {
  if (err) throw err;
  console.error('saved img to mongo');
  });

