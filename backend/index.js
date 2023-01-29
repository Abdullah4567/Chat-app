const express = require('express')
const app = express()
const cors = require('cors')
const { port, applicationName } = require('./config/config')
const connectToMongo = require('./config/db')


app.use(cors());
connectToMongo();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`${applicationName} listening on ${port}`);
});