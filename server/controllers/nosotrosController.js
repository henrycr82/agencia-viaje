exports.infoNosotros = (request,response)=> {
    //response.send('Nosotros');
    //llamamos a la vista y le pasamos el parametro pagina
    response.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}