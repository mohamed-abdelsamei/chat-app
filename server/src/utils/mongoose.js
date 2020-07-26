/* eslint-disable no-console */
const mongoose = require('mongoose');
const { mongo, env } = require('../../config');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development' || env === 'dev') {
    mongoose.set('debug', true);
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = async () => {
    try {
        await mongoose.connect(mongo.uri, {
            keepAlive: 1,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log(`connected to ${mongo.uri}`);
    } catch (error) {
        console.log(error);
    }

    // return mongoose.connection;
};
