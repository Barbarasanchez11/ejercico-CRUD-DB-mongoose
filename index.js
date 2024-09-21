const express = require('express')
const app = express()
const port = 3000
const task = require('./routes')
const { dbConnection } = require('./config/config')


app.use(express.json())
app.use('/', task );

dbConnection();

app.listen(port, () => console.log(`El servidor está escuchando en http://localhost:3000`))