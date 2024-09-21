const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
    try{
        
        await mongoose.connect(process.env.URI);
        console.log('Database connected successfully')

    }catch(err){
        throw new Error('Error with the connection with the database')
    }

}

module.exports = {
    dbConnection
}