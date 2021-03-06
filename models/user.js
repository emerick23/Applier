const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const jobSchema = new mongoose.Schema({
    companyName: String,
    position: String,
    location: String,
    url: String,
    dateApplied: { type: Date, default:Date.now }
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    personalWebsiteLink: String,
    linkedInLink: String,
    jobs: [jobSchema],
}, {
        timestamps: true
    });

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        // replace the user provided password with the hash
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', userSchema);