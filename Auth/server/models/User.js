const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Client', 'Manager', 'Admin'],
        default: 'Client'
    }
});

const jepSchema = new mongoose.Schema({
    question1: {
        type: String,
    },
    question2: {
        type: String,
    },
    question3: {
        type: String,
    },
    question4: {
        type: String,
    },
    question5: {
        type: String,
    },
    question6: {
        type: String,
    },
    question7: {
        type: String,
    },
    question8: {
        type: String,
    },
    question9: {
        type: String,
    },
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});

//create method to compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
    bcrypt.compare(pw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);
const Jep = mongoose.model('Jep', jepSchema);

module.exports = {
    User: User,
    Jep: Jep
}