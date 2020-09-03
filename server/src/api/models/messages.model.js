
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const messageSchema = new Schema({
    msg: { type: String },
    rId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
    u: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        name: { type: "String" }
    }
}, { timestamps: true });


module.exports = mongoose.model('Message', messageSchema);
