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
    a1.question1.data = fs.readFileSync('public/landscapes/Q1.jpg');
    a1.question1.contentType = 'image/jpg';
    a1.question2.data = fs.readFileSync('public/landscapes/Q1.jpg');
    a1.question2.contentType = 'image/jpg';
    a1.question3.data = fs.readFileSync('public/landscapes/Q1.jpg');
    a1.question3.contentType = 'image/jpg';
    a1.hero='antman';
    a1.clue1="0";
    a1.clue2="0";
    a1.clue3="0";
    a1.answer="soulgems";
    a1.bg="bgimg/bg1.jpg";
    a1.totalimg=1;
    a1.successimg="success/level1success.gif";
    a1.failureimg="fail/level1fail.jpg";
    a1.save(function (err, a1) {
      if (err) throw err;
      console.error('saved img to mongo');
      });

///////////////////////////////level2
var a2 = new level;
a2._id=2;
a2.question1.data = fs.readFileSync('public/landscapes/Q21.jpg');
a2.question1.contentType = 'image/jpg';
a2.question2.data = fs.readFileSync('public/landscapes/Q22.jpg');
a2.question2.contentType = 'image/jpg';
a2.question3.data = fs.readFileSync('public/landscapes/Q23.jpg');
a2.question3.contentType = 'image/jpg';
a2.hero='antman';
a2.clue1="0";
a2.clue2="0";
a2.clue3="0";
a2.answer="echolocation";
a2.bg="bgimg/bg2.jpg";
a2.totalimg=3;
a2.successimg="success/level2success.gif";
a2.failureimg="fail/level2fail.jpg";
a2.save(function (err, a2) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
//////////////////////level3
var a3 = new level;
a3._id=3;
a3.question1.data = fs.readFileSync('public/landscapes/Q31.jpg');
a3.question1.contentType = 'image/jpg';
a3.question2.data = fs.readFileSync('public/landscapes/Q32.jpg');
a3.question2.contentType = 'image/jpg';
a3.question3.data = fs.readFileSync('public/landscapes/Q33.jpg');
a3.question3.contentType = 'image/jpg';
a3.hero='antman';
a3.clue1="0";
a3.clue2="0";
a3.clue3="0";
a3.answer="georgics";
a3.bg="bgimg/bg3.jpg";
a3.totalimg=3;
a3.successimg="success/level3success.gif";
a3.failureimg="fail/level3fail.jpeg";
a3.save(function (err, a3) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
  /////////////////////level4
  var a4 = new level;
  a4._id=4;
  a4.question1.data = fs.readFileSync('public/landscapes/Q41.jpg');
  a4.question1.contentType = 'image/jpg';
  a4.question2.data = fs.readFileSync('public/landscapes/Q42.jpg');
  a4.question2.contentType = 'image/jpg';
  a4.question3.data = fs.readFileSync('public/landscapes/Q43.jpg');
  a4.question3.contentType = 'image/jpg';
  a4.hero='antman';
  a4.clue1="0";
  a4.clue2="0";
  a4.clue3="0";
  a4.answer="paulocoelho";
  a4.bg="bgimg/bg4.jpg";
  a4.totalimg=3;
  a4.successimg="success/level4success.gif";
  a4.failureimg="fail/level4fail.jpg";
  a4.save(function (err, a4) {
    if (err) throw err;
    console.error('saved img to mongo');
    });
    ////////////////level5
    var a5 = new level;
    a5._id=5;
    a5.question1.data = fs.readFileSync('public/landscapes/Q51.jpg');
    a5.question1.contentType = 'image/jpg';
    a5.question2.data = fs.readFileSync('public/landscapes/Q52.jpg');
    a5.question2.contentType = 'image/jpg';
    a5.question3.data = fs.readFileSync('public/landscapes/Q52.jpg');
    a5.question3.contentType = 'image/jpg';
    a5.hero='antman';
    a5.clue1="0";
    a5.clue2="0";
    a5.clue3="0";
    a5.answer="vaadipullavaadi";
    a5.bg="bgimg/bg5.jpg";
    a5.totalimg=2;
    a5.successimg="success/level5success.jpg";
    a5.failureimg="fail/level5fail.jpg";
    a5.save(function (err, a5) {
      if (err) throw err;
      console.error('saved img to mongo');
      });
///////////////////level6
var a6 = new level;
a6._id=6;
a6.question1.data = fs.readFileSync('public/landscapes/Q61.jpg');
a6.question1.contentType = 'image/jpg';
a6.question2.data = fs.readFileSync('public/landscapes/Q62.jpg');
a6.question2.contentType = 'image/jpg';
a6.question3.data = fs.readFileSync('public/landscapes/Q62.jpg');
a6.question3.contentType = 'image/jpg';
a6.hero='antman';
a6.clue1="0";
a6.clue2="0";
a6.clue3="0";
a6.answer="cannibalism";
a6.bg="bgimg/bg6.jpg";
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
a7.question1.data = fs.readFileSync('public/landscapes/Q71.jpg');
a7.question1.contentType = 'image/jpg';
a7.question2.data = fs.readFileSync('public/landscapes/Q72.jpg');
a7.question2.contentType = 'image/jpg';
a7.question3.data = fs.readFileSync('public/landscapes/Q73.jpg');
a7.question3.contentType = 'image/jpg';
a7.hero='antman';
a7.clue1="0";
a7.clue2="0";
a7.clue3="0";
a7.answer="beatrice";
a7.bg="bgimg/bg7.jpg";
a7.totalimg=3;
a7.successimg="success/level7success.gif";
a7.failureimg="fail/level7fail.jpg";
a7.save(function (err, a7) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
//////////////////level8
var a8 = new level;
a8._id=8;
a8.question1.data = fs.readFileSync('public/landscapes/Q81.jpg');
a8.question1.contentType = 'image/jpg';
a8.question2.data = fs.readFileSync('public/landscapes/Q82.jpg');
a8.question2.contentType = 'image/jpg';
a8.question3.data = fs.readFileSync('public/landscapes/Q83.jpg');
a8.question3.contentType = 'image/jpg';
a8.hero='antman';
a8.clue1="0";
a8.clue2="0";
a8.clue3="0";
a8.answer="cernhttpd";
a8.bg="bgimg/bg8.jpg";
a8.totalimg=3;
a8.successimg="success/level8success.jpg";
a8.failureimg="fail/level8fail.jpg";
a8.save(function (err, a8) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
////////////////////////level9
var a9 = new level;
a9._id=9;
a9.question1.data = fs.readFileSync('public/landscapes/Q91.jpg');
a9.question1.contentType = 'image/jpg';
a9.question2.data = fs.readFileSync('public/landscapes/Q92.jpg');
a9.question2.contentType = 'image/jpg';
a9.question3.data = fs.readFileSync('public/landscapes/Q93.jpg');
a9.question3.contentType = 'image/jpg';
a9.hero='antman';
a9.clue1="0";
a9.clue2="0";
a9.clue3="0";
a9.answer="hawkingradiation";
a9.bg="bgimg/bg9.jpg";
a9.totalimg=3;
a9.successimg="success/level9success.jpg";
a9.failureimg="fail/level9fail.jpg";
a9.save(function (err, a9) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level10
var a10 = new level;
a10._id=10;
a10.question1.data = fs.readFileSync('public/landscapes/QA1.jpg');
a10.question1.contentType = 'image/jpg';
a10.question2.data = fs.readFileSync('public/landscapes/QA2.jpg');
a10.question2.contentType = 'image/jpg';
a10.question3.data = fs.readFileSync('public/landscapes/QA3.jpg');
a10.question3.contentType = 'image/jpg';
a10.hero='antman';
a10.clue1="0";
a10.clue2="0";
a10.clue3="0";
a10.answer="busbybabes";
a10.bg="bgimg/bg10.jpg";
a10.totalimg=3;
a10.successimg="success/level10success.jpg";
a10.failureimg="fail/level10fail.jpg";
a10.save(function (err, a10) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level11
var a11 = new level;
a11._id=11;
a11.question1.data = fs.readFileSync('public/landscapes/QB1.jpg');
a11.question1.contentType = 'image/jpg';
a11.question2.data = fs.readFileSync('public/landscapes/QB2.jpg');
a11.question2.contentType = 'image/jpg';
a11.question3.data = fs.readFileSync('public/landscapes/QB3.jpg');
a11.question3.contentType = 'image/jpg';
a11.hero='antman';
a11.clue1="0";
a11.clue2="0";
a11.clue3="0";
a11.answer="anagram";
a11.bg="bgimg/bg11.jpg";
a11.totalimg=3;
a11.successimg="success/level11success.gif";
a11.failureimg="fail/level11fail.jpg";
a11.save(function (err, a11) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
  ///////////////////level12
  var a12 = new level;
  a12._id=12;
  a12.question1.data = fs.readFileSync('public/landscapes/QC1.jpg');
  a12.question1.contentType = 'image/jpg';
  a12.question2.data = fs.readFileSync('public/landscapes/QC2.jpg');
  a12.question2.contentType = 'image/jpg';
  a12.question3.data = fs.readFileSync('public/landscapes/QC3.jpg');
  a12.question3.contentType = 'image/jpg';
  a12.hero='antman';
  a12.clue1="0";
  a12.clue2="0";
  a12.clue3="0";
  a12.answer="biriyani";
  a12.bg="bgimg/bg12.jpg";
  a12.totalimg=3;
  a12.successimg="success/level12success.gif";
  a12.failureimg="fail/level12fail.jpg";
  a12.save(function (err, a12) {
    if (err) throw err;
    console.error('saved img to mongo');
    });
/////////////////////level13
var a13 = new level;
a13._id=13;
a13.question1.data = fs.readFileSync('public/landscapes/QD1.jpg');
a13.question1.contentType = 'image/jpg';
a13.question2.data = fs.readFileSync('public/landscapes/QD2.jpg');
a13.question2.contentType = 'image/jpg';
a13.question3.data = fs.readFileSync('public/landscapes/QD3.jpg');
a13.question3.contentType = 'image/jpg';
a13.hero='antman';
a13.clue1="0";
a13.clue2="0";
a13.clue3="0";
a13.answer="virendarsehwag";
a13.bg="bgimg/bg13.jpg";
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
a14.question1.data = fs.readFileSync('public/landscapes/QE1.jpg');
a14.question1.contentType = 'image/jpg';
a14.question2.data = fs.readFileSync('public/landscapes/QE2.jpg');
a14.question2.contentType = 'image/jpg';
a14.question3.data = fs.readFileSync('public/landscapes/QE3.jpg');
a14.question3.contentType = 'image/jpg';
a14.hero='antman';
a14.clue1="0";
a14.clue2="0";
a14.clue3="0";
a14.answer="dissociativeidentitydisorder";
a14.bg="bgimg/bg14.jpg";
a14.totalimg=3;
a14.successimg="success/level14success.gif";
a14.failureimg="fail/level14fail.jpg";
a14.save(function (err, a14) {
  if (err) throw err;
  console.error('saved img to mongo');
  });
/////////////////////////level15
var a15 = new level;
a15._id=15;
a15.question1.data = fs.readFileSync('public/landscapes/QF1.jpg');
a15.question1.contentType = 'image/jpg';
a15.question2.data = fs.readFileSync('public/landscapes/QF2.jpg');
a15.question2.contentType = 'image/jpg';
a15.question3.data = fs.readFileSync('public/landscapes/QF3.jpg');
a15.question3.contentType = 'image/jpg';
a15.hero='antman';
a15.clue1="0";
a15.clue2="0";
a15.clue3="0";
a15.answer="idunn";
a15.bg="bgimg/bg15.jpg";
a15.totalimg=3;
a15.successimg="success/level15success.jpg";
a15.failureimg="fail/level15fail.jpg";
a15.save(function (err, a15) {
  if (err) throw err;
  console.error('saved img to mongo');
  });

var a15 = new level;
a15._id=16;
a15.question1.data = fs.readFileSync('public/landscapes/QG1.jpg');
a15.question1.contentType = 'image/jpg';
a15.question2.data = fs.readFileSync('public/landscapes/QG2.jpg');
a15.question2.contentType = 'image/jpg';
a15.question3.data = fs.readFileSync('public/landscapes/QG3.jpg');
a15.question3.contentType = 'image/jpg';
a15.hero='antman';
a15.clue1="0";
a15.clue2="0";
a15.clue3="0";
a15.answer="agastya";
a15.bg="indexbg.jpg";
a15.totalimg=3;
a15.successimg="furysmile.jpg";
a15.failureimg="fail/thanos-smile.gif";
a15.save(function (err, a15) {
  if (err) throw err;
  console.error('saved img to mongo');
  });


var a15 = new level;
a15._id=17;
a15.question1.data = fs.readFileSync('public/landscapes/QG1.jpg');
a15.question1.contentType = 'image/jpg';
a15.question2.data = fs.readFileSync('public/landscapes/QG1.jpg');
a15.question2.contentType = 'image/jpg';
a15.question3.data = fs.readFileSync('public/landscapes/QG1.jpg');
a15.question3.contentType = 'image/jpg';
a15.hero='antman';
a15.clue1="0";
a15.clue2="0";
a15.clue3="0";
a15.answer="achacho";
a15.bg="indexbg.jpg";
a15.totalimg=1;
a15.successimg="success/level15success.jpg";
a15.failureimg="fail/level15fail.jpg";
a15.save(function (err, a15) {
  if (err) throw err;
  console.error('saved img to mongo');
  });

