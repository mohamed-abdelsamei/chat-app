
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const roomSchema = new Schema({
    name: { type: String },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId }]
}, { timestamps: true });


module.exports = mongoose.model('Room', roomSchema);
