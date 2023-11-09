const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})

mongoose.connection.on('error', (error)=>{
    console.log(`Ha ocurrido un problema al intentar conectar con la base de datos: ${error}`)
})

require('../models/Product')