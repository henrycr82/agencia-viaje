const Sequelize = require('sequelize');

//Para poder usarlo en los otros módulos
module.exports = new Sequelize('agenciadeviajes','root','Daniel@310815', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //operatorsAliases: false
});