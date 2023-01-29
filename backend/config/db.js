const mongoose = require('mongoose');

const connectToMongo = async () => {

    const res = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    console.log('Connected to mongoose: ' + res.connection.host)
}
module.exports = connectToMongo;