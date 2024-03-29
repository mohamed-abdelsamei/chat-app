
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const subscriptionSchema = new Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
    description: { type: String },
    role: { type: String, enum: ["member", "admin"] },
    u: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        name: { type: "String" }
    }
}, { timestamps: true });



module.exports = mongoose.model('Subscription', subscriptionSchema);
