const express = require('express')
const app = express()
const port = 3000
const { dbConnection } = require('./config/config')
const task = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use('/', task )


dbConnection();

app.listen(port, () => console.log(`El servidor está escuchando en http://localhost:3000`))