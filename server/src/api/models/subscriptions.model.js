
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const subscriptionSchema = new Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
    description: { type: String },
    u: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        name: { type: "String" }
    }
});


module.exports = mongoose.model('Subscription', subscriptionSchema);
