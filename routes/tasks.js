const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const TaskController = require('../controllers/Task.controllers')



router.post('/create', TaskController.create) 
router.get('/', TaskController.getAll)
router.get('/id/:_id', TaskController.getByID)
router.put('/markAsCompleted/:_id', TaskController.markAsCompleted)
router.put('/id/:_id', TaskController.updateTitle)
router.delete('/id/:_id', TaskController.deleteTask)
  


module.exports = router

