/*
* Esta es una forma antigua de configurar un servidor con express 
*/

//importamos express
const express = require('express');
//importamos path
const path = require('path');
//importo el body-parser para pasar parametros via POST
const bodyParser = require('body-parser');
//importo mi archivo de rutas
const routes = require('./routes');
//importamos el archivo de configuración (como el archivo se llama index.js no requerios mencionar el nombre del archivo, basta con el enombre de la carpeta)
const configs = require('./config');
//importamos el archivo de configuración de base de datos
//const db = require('./config/database');

//probamos la conexión a la base de datos
//authenticate() nos retorna un Promise
/*db.authenticate()
    .then(() => console.log('DB Conectadda'))
    .catch(error => console.log(error));*/

//configurar express
//use() responde a todos los verbos de http (put, delete, entre otros)
//get() solo responde a get
//send() muestra en pantalla
//cuando tengo varias paginas no me funciono el use() lo cambie por get() y funciono
const app = express();

//habilitar pug para las vistas
app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar la carpeta estatica llamada 'public'
app.use(express.static('public'));

//validar si estamos en desarrollo o en producción
const config = configs[app.get('env')];

//creamos la variabñe para el sitio web (nombresitio de server/config/index.js)
app.locals.titulo = config.nombresitio;

//muestra el año actual y genera la ruta
//use tiene la caracteristica que se va usar con todos los verbos de http
app.use((request,response,next)=> {
    //crear una fecha
    const fecha = new Date();
    //response.locals son como variables locales (de node y express) que puedo pasar en los archivos de mi proyecto
    response.locals.fechaActual = fecha.getFullYear();
    //devuelve la ruta que esta despues del Slash (/). Ejemplo /testimoniales
    response.locals.ruta = request.path;
    return next();//Usamos el middleware para que ejecute la siguinte función.
})

//las rutas las pase a routes/index.js
/*app.get('/', (request,response)=> {
    response.send('Inicio');
})

app.get('/nosotros', (request,response)=> {
    response.send('Nosotros');
})*/

//Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/', routes());

app.listen(3000);