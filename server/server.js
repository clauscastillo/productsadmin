// Importacion y config de express
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

// Poner en marcha
app.listen(PORT, () => {
    console.log(`Listening at the port ${PORT}`)
});

// Configuracion para peticiones cruzadas y lectura de POST
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// Mongoose and DB config
require('./config/mongoose.config');


// Rutas

const routesProducts = require('./routes/products.routes');
routesProducts(app)