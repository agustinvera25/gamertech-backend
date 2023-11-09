const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./config/db.js')
//importamos la configuracion de la base de datos
const routes = require('./routes/index.js')
//importamos las rutas establecidas
const mercadopago = require('mercadopago')

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

const app = express()
//Inicializamos la aplicación usando server

const PORT = 5001
//Establecemos puerto por defecto 5000 

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(routes)
//Establecemos que la app use las rutas definidas

app.listen(PORT, err => {
    if(err) return console.log(err) //En caso de haber error
    console.log(`Server corriendo desde el puerto: ${PORT}`)
})
//La app escucha en el puerto 5000