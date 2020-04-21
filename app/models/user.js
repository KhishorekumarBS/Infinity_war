var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose model
var UserSchema = new Schema({
  name: {
        type: String,
        required: true
    },
   _id: {
        type: String,
        required: true
    },
  password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    lend: {
        type: Date,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Userdone1', UserSchema);
