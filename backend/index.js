const express = require('express')
const app = express()
const cors = require('cors')
const { port, applicationName } = require('./config/config')
const connectToMongo = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorHandler')


app.use(cors());
connectToMongo();
app.use(express.json()); // to accept json data

// routes for User 
app.use('/api/user', userRoutes);

// Route not Found
app.use(errorHandler)

app.listen(port, () => {
  console.log(`${applicationName} listening on ${port}`);
});