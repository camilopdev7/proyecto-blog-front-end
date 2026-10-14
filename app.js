// Iniciar jquery a traves de una funcion
$(function () {
    
    // mostrar los articulos de las categorias
    $('.category-item').click(function (e) {
        
        // obtener categoria seleccionada
        let category = $(this).data('category');
        
        $('.category-item').removeClass('active');
        $(this).addClass('active');

        // mostrar todas las categorias
        if (category === "all") {

            // mostrar todos los articulos
            $('article').fadeIn();
        }
        else {

            // ocultar todos los articulos
            $('article').fadeOut();

            // mostrar los articulos de la categoria seleccionada
            $(`article[data-category="${category}"]`).fadeIn();

        }

    })

    // mostrar leer mas contenido en cada articulo
    $('.article-text[data-read-more="true"]').click(function (e) {

        // prevenir el comportamiento por defecto
        e.preventDefault();

        // obtener la categoria del articulo
        let category = $(this).closest('article').data('category');

        if (category === "javascript") {
            $(this).text('JavaScript (JS) es un lenguaje de programación ligero, interpretado (o compilado justo-a-tiempo) con funciones de primera clase. Si bien es más conocido como el lenguaje de scripting para páginas web, muchos entornos fuera del navegador también lo usan, tal como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un lenguaje basado en prototipos, con recolección de basura, dinámico, que soporta múltiples paradigmas como imperativo, funcional y orientado a objetos.')
        }
        else if (category === "css") {
            $(this).text('CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. Anteriormente , el desarrollo de varias partes de las especificaciones de CSS era realizado de manera sincrónica, lo que permitía el versionado de las recomendaciones. Probablemente habrás escuchado acerca de CSS1, CSS2.1, CSS3. Sin embargo, CSS4 nunca se ha lanzado como una versión oficial.')
        }
        else if (category === "html") {
            $(this).text('La última versión estable de HTML, HTML5 convierte a HTML de un simple formato de marcado para estructurar documentos en una plataforma completa de desarrollo de aplicaciones. Entre otras características, HTML5 incluye nuevos elementos y API de JavaScript para mejorar el almacenamiento, la multimedia y el acceso al hardware.')
        }
        else {
            $(this).text('Leer más...');
        }

    })

    // navegar a la seccion del menu
    $('.menu-item').click(function (e) {
        e.preventDefault();

        let target = $(this).attr('href');

        $('.menu-item').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 400);
    });

    // search articulos
    $('#search-input').on('keyup', function(e){

        // obtener el texto de la barra de busqueda
        let text = $(this).val().toLowerCase();
        let results = 0;

        $('.article').each(function() {

            // obtener el titulo del articulo
            let title = $(this).find('.article-title').text().toLowerCase();

            if (title.includes(text)) {

                // mostrar el articulo
                $(this).show();
                results++;
            }
            else {

                // ocultar el articulo
                $(this).hide();
            }
        })

        // mostral 0 resultados encontrados si no se encuentra ninguno
        if (text === '' || results > 0) {
            $('#search-results').hide();
        }
        else {
            $('#search-results').text('No se encontraron resultados').show();
        }
    })

    // volver arriba
    $(window).on('scroll', function () {

        // si el scroll es mayor a 200px mostrar el boton
        if ($(this).scrollTop() > 200) {
            $('#scroll-to-top').fadeIn();
        }
        else {
            $('#scroll-to-top').fadeOut();
        }
    });

    // animacion para volver arriba
    $('#scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

    // mostrar el formulario de contacto
    $('a[href="#contacto"]').click(function (e) {
        e.preventDefault();
        $('#contacto form').css('display', 'flex');
    });

    $('#contacto form').on('submit', function (e) {
        e.preventDefault();

        // obtener los valores del formulario
        const nombre = $('#name').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#message').val().trim();

        // validar que los campos no esten vacios
        if (nombre === '' || email === '' || mensaje === '') {
            $('#form-message').text('Por favor, complete todos los campos').show();
            return;
        }

        $('#form-message').text('Enviando...').show();

        // enviar el formulario
        setTimeout(function () {
            $('#form-message').text('Mensaje enviado').show();
        }, 2000);
    });

});
