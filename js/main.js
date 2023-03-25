$(document).ready(function() {
    /* Selecciona el elemento window que tiene la información de la situación en la 
    que estamos cuando estamos navegando por la ventana */
    /* Llamamos el método "on". Le pasamos el evento "scroll" y una función */
    /* Cuando al usar el scroll llega al "id" de nombre "pr" */
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset(); /* creamos una variable de nombre "posicion" */
        if($(window).scrollTop() >= posicion.top) {  /* cuando esté más abajo le quitamos la clase transparente */
            $('header').removeClass('transparente');
            $('#burger').addClass('solid');
        } else {
            $('header').addClass('transparente');
            $('#burger').removeClass('solid');
        }
    })


    /* Manejo del menú amburguesa o menú lateral */
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto'); // toggleClass hace que si tiene la clase abierto la saque y si no la tiene que la ponga
    })

    // Smooth scroll
    $('a').on('click', function() {
        if(this.hash !== '') { /* si nuestro hash es distinto de vacio, en nuestro caso tiene valor "pr" */
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})