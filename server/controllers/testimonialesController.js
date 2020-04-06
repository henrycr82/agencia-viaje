//importamos el modelo Testimoniales.js
const Testimonial = require('../models/Testimoniales');//Esto retorna un promise

//exports.mostrarTestimoniales = (request,response)=> {
    /*response.render('testimoniales', {
        pagina: 'Testimoniales'
    });*/
    /*Testimonial.findAll()
        .then(testimoniales => response.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }))
        .catch(error => console.log(error))
}*/

//con Async  Await
exports.mostrarTestimoniales = async (request,response)=> {
    const testimoniales = await Testimonial.findAll()
    response.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    }) 
}

/*
exports.agregarTestimonial = (request,response)=> {
        
    //Asignación por destructuring 
    let {nombre,correo,mensaje} = request.body;

    //validar que todos los campos esten llenos
    let errores = [];

    if (!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    }

    if (!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }

    if (!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //Si hay errores
    if (errores.length>0) {
        //muestra la vista con errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
        //se almacena en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => response.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
    
}
*/

//con Async  Await
exports.agregarTestimonial = async (request,response)=> {
        
    //Asignación por destructuring 
    let {nombre,correo,mensaje} = request.body;

    //validar que todos los campos esten llenos
    let errores = [];

    if (!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    }

    if (!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }

    if (!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //Si hay errores
    if (errores.length>0) {
        //muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        //se almacena en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => response.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
    
}