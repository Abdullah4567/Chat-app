const mongoose = require('mongoose');
const { mongoUri } = require('./config')

const connectToMongo = async () => {

    const res = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    console.log('Connected to mongoose: ' + res.connection.host)
}
module.exports = connectToMongo;