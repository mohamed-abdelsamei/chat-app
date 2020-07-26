const app = require('./src/app')
const mongoose = require('./src/utils/mongoose')
async function run() {
    await mongoose.connect()
    await app.start()
}

run()