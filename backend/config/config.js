const dotenv = require('dotenv')
dotenv.config();
module.exports = {
    databaseName: process.env.DATABASE_NAME,
    port: process.env.PORT,
    applicationName: process.env.APPLICATION_NAME,
    baseUrl: process.env.BASE_URL,
    mongoUri: process.env.MONGO_URI
}