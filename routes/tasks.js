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
        const tasks = await Task.find()//método que se utiliza para buscar todos los registros de tareas en la base de dato
        res.status(200).json(tasks)
    }catch (error){
     res.status(500).send('An error occurred while trying to get the tasks.')
    }

})



router.get('/id/:_id', async (req, res) => {
    try {
        const task = await Task.findById(req.params._id);//busca una tarea en la base de datos utilizando su ID
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
        const task = await Task.findByIdAndUpdate(req.params._id, {completed: false},{new:true})//se busca por ID(se obtiene de re.params._id),
        //se actualiza el estado(completed). new:true ->significa que la función devolverá la tarea actualizada en lugar de la original.
        if(task){
            res.status(200).send('task updated succesfully')
        }
    
       }catch(error){
       res.status(500).send('An error updating tasks.');
       }

    })

    router.put('/id/:_id', async (req,res) => {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, {title: req.body.title}, {new: true})//busca una tarea en la base de datos usando el ID proporcionado en la URL,
            //se actualiza el título de esa tarea con el nuevo título que se envía en el cuerpo de la solicitud(req.body.title),
            //significa que la función devolverá el documento actualizado en lugar del original.
            if(task){
                res.status(200).send('task updated succesfully')
            }
        
           }catch(error){
           res.status(500).send('An error updating tasks.');
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

