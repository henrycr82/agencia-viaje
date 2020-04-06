//importamos sequelize
const Sequelize = require('sequelize');

//importamos el archivo de configuración de base de datos
const db = require('../config/database');

//defenimos el modelo
const Viaje = db.define('viaje',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
});

//para exportar el módelo
module.exports = Viaje;