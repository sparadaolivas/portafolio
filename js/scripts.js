/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

$jQuery(function() {

    // llamada al plugin
    jQuery('.gridder').gridderExpander({
        scroll: true,  // activar/desactivar auto-scroll
        scrollOffset: 30,  // distancia en píxeles de margen al hacer scroll
        scrollTo: "panel", // hacia donde se hace el auto-scroll
        animationSpeed: 400, // duración de la animación al hacer clic en elemento
        animationEasing: "easeInOutExpo", // tipo de animación
        showNav: true,  // activar/desactivar navegación
        nextText: "Next", // texto para pasar a la siguiente imagen
        prevText: "Previous", // texto para pasar a la imagen anterior
        closeText: "Close", // texto del botón para cerrar imagen expandida
        onStart: function(){
            //código que se ejecuta cuando Gridder se inicializa
        },
        onContent: function(){
            //código que se ejecuta cuando Gridder ha cargado el contenido
        },
        onClosed: function(){
            //código que se ejecuta al cerrar Gridder
        }
    });

});