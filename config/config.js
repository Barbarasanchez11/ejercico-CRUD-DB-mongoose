const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
    try{
        
        await mongoose.connect(process.env.URI);
        console.log('Base de datos conectada con éxito')

    }catch(err){
        throw new Error('Error en la conexión con la base de datos')
    }

}

module.exports = {
    dbConnection
}