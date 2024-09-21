const express = require('express')
const router = express.Router()
const Task = require('../models/Task')



router.post('/create', async(req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)//se crea un recurso en una ubi diferente
        
    }catch {
        console.error(error);
        res.status(500).send('An error occurred while trying to create a task.')
    }
})

router.get('/', async(req,res) => {
    try {
        const tasks = await Task.find()//trae todos los registros de tareas
        res.status(200).json(tasks)
    }catch (error){
     res.status(500).send('An error occurred while trying to get the tasks.')
    }

})



router.get('/id/:_id', async (req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send('An error occurred while trying to get the tasks.');
    }
});

router.put('/markAsCompleted/:_id', async (req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id)
        if(task){
            res.status(200).send('task updated succesfully')
        }
    
       }catch(error){
       res.status(500).send('An error deleting tasks.');
       }

    })

router.delete('/id/:_id', async(req,res) => {
   try{
    const task = await Task.findByIdAndDelete(req.params._id)
    if(task){
        res.status(200).send('task deleted succesfully')
    }

   }catch(error){
   res.status(500).send('An error deleting tasks.');
   }
})



module.exports = router

/*
PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo “completed” desde este endpoint, sino solo, el título.
DELETE /id/:_id: Endpoint para eliminar una tarea.*/