
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const roomSchema = new Schema({
    name: { type: String },
    description: { type: String },
});


module.exports = mongoose.model('Room', roomSchema);
