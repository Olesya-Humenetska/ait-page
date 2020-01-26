$(document).ready(function () {
    AOS.init({
        once: true
    })

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
});

