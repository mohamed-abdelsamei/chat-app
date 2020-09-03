
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const subscriptionSchema = new Schema({
    rId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
    description: { type: String },
    name: { type: String, default: 'Room' },
    role: { type: String, enum: ["member", "admin"] },
    u: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        name: { type: "String" }
    }
}, { timestamps: true });



module.exports = mongoose.model('Subscription', subscriptionSchema);
