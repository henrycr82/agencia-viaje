//importamos el modelo Viajes.js
const Viaje = require('../models/Viajes');//Esto retorna un promise
/*
exports.mostrarViajes = (request,response)=> {
    Viaje.findAll()//retorna todos los viajes. El modelo Viaje retorna un promise
        //llamamos a la vista render('viajes') y le pasamos el parametro página y los viajes que viene de la consulta al modelo
        //then(viajes) son los viajes que obtengo del modelo
        .then(viajes => response.render('viajes', {
            pagina: 'Próximos Viajes',
            //cuando tienes porpiedad y valor del mismo nombre (viajes: viajes) se puede pasar un solo nombre (viaje) y tendra la porpiedad y valor
            viajes
        }))
        .catch(error => console.log(error))//En caso de error lo mando a la consola para hacerle un debug
}*/

//con Async  Await
exports.mostrarViajes = async (request,response)=> {
    const viajes = await Viaje.findAll()
    response.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

/*
exports.mostrarViaje = (request,response)=> {
    //retorna el detalle de un viaje en especifico.
    Viaje.findByPk(request.params.id)
        .then(viaje => response.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error))
}*/

//con Async  Await
exports.mostrarViaje = async (request,response)=> {
    const viaje = await Viaje.findByPk(request.params.id)
    response.render('viaje', {
        viaje
    }) 
}

