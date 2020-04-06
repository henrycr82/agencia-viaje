//importamos el modelo Viajes.js
const Viaje = require('../models/Viajes');//Esto retorna un promise

//importamos el modelo Testimoniales.js
const Testimonial = require('../models/Testimoniales');//Esto retorna un promise

//exports.consultasHomepage = (request,response)=> {
    //response.send('Inicio');
    //llamamos a la vista
    /*response.render('index',{
        clase: 'home'
    });*/

    //creamos un arreglo de promises
    /*const promises = [];

    //agregando elementos al promise
    promises.push(Viaje.findAll({
        limit : 3
    }))

    promises.push(Testimonial.findAll({
        limit : 3
    }))

    //pasar al promise y ejecutarlo
    const resultado = Promise.all(promises);

    
    resultado.then(resultado => response.render('index', {
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
    
}*/

//con Async  Await
exports.consultasHomepage = async (request,response)=> {
   
    const viajes = await Viaje.findAll({limit : 3})
    
    const testimoniales = await Testimonial.findAll({limit : 3})

    response.render('index', {
        clase: 'home',
        viajes,
        testimoniales
    })
}