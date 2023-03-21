$(document).ready(function() {
    /* Selecciona el elemento window que tiene la información de la situación en la 
    que estamos cuando estamos navegando por la ventana */
    /* Llamamos el método "on". Le pasamos el evento "scroll" y una función */
    /* Cuando al usar el scroll llega al "id" de nombre "pr" */
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset(); /* creamos una variable de nombre "posicion" */
        if($(window).scrollTop() >= posicion.top) {  /* cuando esté más abajo le quitamos la clase transparente */
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
})