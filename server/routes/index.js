const express = require('express');
const router = express.Router();

//importamos el controlador nosotrosController
const nosotrosController = require('../controllers/nosotrosController');

//importamos el controlador homeController
const homeControlle = require('../controllers/homeController');

//importamos el controlador viajesController
const viajesController = require('../controllers/viajesController');

//importamos el controlador testimonialesController
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeControlle.consultasHomepage);
    
    router.get('/nosotros', nosotrosController.infoNosotros);

    //creamos la ruta viajes
    router.get('/viajes', viajesController.mostrarViajes);

    //creamos la ruta viaje y le pasamos el id del viaje
    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    //guardar testimoniales
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}