var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var port = process.env.PORT || 9000;
var imgPath = 'ak.jpg';

// connect to mongo
mongoose.connect('localhost', 'testing');

// example schema
var schema = new Schema({
    img: { data: Buffer, contentType: String },
    iduser: { type:Number }
});

// our model
var images = mongoose.model('images', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');
    var a = new images;
    a.iduser=21;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/jpg';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');

      // start a demo server
      var server = express();
      server.get('/', function (req, res, next) {
        images.findOne({iduser:21}, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });
      });

      server.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });

      server.listen(port);

      process.on('SIGINT', function () {
        server.close();
      });
    });
  });
