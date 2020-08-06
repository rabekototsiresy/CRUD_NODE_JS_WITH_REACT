const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const { db } = require('./api/db')
require('dotenv').config();

const PORT=process.env.NODE_PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// db.sync()

app.use('',require('./api/controllers/music.controller'))


app.listen(PORT,()=>{
  console.log("server runnig on port : "+PORT)
})


