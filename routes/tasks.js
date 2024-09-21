const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/create', async(req,res) => {
    try {
        const task = await task.create(req.body)
        res.status(201).json(task)
        
    }catch {
        console.error(error);
        res.status(500).send('error al crear una nueva tarea')
    }
})




module.exports = router

/*POST /create: Endpoint para crear una tarea.
GET /: Endpoint para traer todas las tareas.
GET /id/:_id: Endpoint para buscar tarea por id.
PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo “completed” desde este endpoint, sino solo, el título.
DELETE /id/:_id: Endpoint para eliminar una tarea.*/