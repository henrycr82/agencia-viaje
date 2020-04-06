//importamos sequelize
const Sequelize = require('sequelize');

//importamos el archivo de configuración de base de datos
const db = require('../config/database');

//defenimos el modelo
const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

//para exportar el módelo
module.exports = Testimonial;