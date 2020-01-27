$(document).ready(function () {

    $('.classes-carousel').slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".moreBox").slice(0, 8).show();

    if ($(".blogBox:hidden").length !== 0) {
        $("#loadMore").show();
    }
    $("#loadMore").click(function (e) {
        e.preventDefault();
        $(".moreBox:hidden").hide().slice(0, 12).slideDown(300);
        if ($(".moreBox:hidden").length === 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
    AOS.init({
        once: true
    });
});

