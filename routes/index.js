const express = require('express')

const router = express.Router()
const taskRoutes = require('./tasks')


router.use('/', taskRoutes)

router.use((req,res) => {
    res.send('<h1>Page not found</h1>')
})

module.exports = router