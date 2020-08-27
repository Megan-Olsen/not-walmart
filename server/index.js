const express = require('express')
const app = express ()
const productCtrl = require('./controllers/productsCondroller')


const SERVER_PORT = 5000



app.use(express.json)



app.listen(SERVER_PORT, () => 'Mindless consumerism on port ${SERVER_PORT}')