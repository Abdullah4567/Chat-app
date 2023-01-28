const express = require('express')
const app = express()
const cors = require('cors')
const {databaseName, port,applicationName}= require('./config')


app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`${applicationName} listening on ${port}`);
});