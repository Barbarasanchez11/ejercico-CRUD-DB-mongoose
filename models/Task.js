const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema ({
    title: String,
    completed: String //String porque le estamos un json y sólo acepta texto, así no tengo stringfy
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task