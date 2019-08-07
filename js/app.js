$(document).ready(function () {

    $("ul.filtro li:first").addClass("active");

    $("ul.filtro li").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        let filtro = $(this).attr("data-filter");

        console.log(filtro);

        if (filtro == "todas") {

            $(".peliculas img").show(500);

        } else {

            $(".peliculas img").not("." + filtro).fadeOut();
            $(".peliculas img").filter("." + filtro).show(500);

        }
    });

});