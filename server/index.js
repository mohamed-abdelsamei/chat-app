const server = require('./src/app')
const mongoose = require('./src/utils/mongoose')

async function run() {
    await mongoose.connect()
    server.listen(3000, () => {
        console.log('web server started');
    })
}

run()