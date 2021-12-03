

$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.header .navbar').toggleClass('nav-toggle');
    })
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() < 25) {
            $('.header').hide();
        }
        else {
            $('.header').show();
        }
        $('.fa-bars').removeClass('fa-times');
        $('.header .navbar').removeClass('nav-toggle');
    })

    //navubar btn active
    $('.buttons').click(function () {
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.portfolio .images .filter-images').show();

        }
        else {
            $('.portfolio .images .filter-images').not('.' + filter).hide();
            $('.portfolio .images .filter-images').filter('.' + filter).show();
        }

        $(this).addClass('activat').siblings().removeClass('activat');
    })



    //posrfoilo btn activation
    $('.navbar ul li').click(function () {
        $(this).addClass('activat').siblings().removeClass('activat');
    })

    ///scroll top btn

    var mybutton = document.getElementById("topbtn");


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    $('.topbtn').click(function () {
        $(window).scrollTop(0);
    })


    // var scroll = $(window).scrollTop();
    //     if (scroll < winH) {
    //         $(".navbar").addClass("hide");
    //     } else {
    //         $(".navbar").removeClass("hide");
    //     }
})




