
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// create a schema
const userSchema = new Schema({
    name: { type: String, lowercase: true, trim: true },
    username: { type: String, lowercase: true, trim: true, unique: true },
    status: { type: String, enum: ['new', 'active'] },
    password: { type: String },

});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    // before save user hash password
    if (this.password) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)
    }
    next()
})

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);
