setTimeout(() => {
    $(".opening").addClass("openingAnimation");
    $(".openingBG").addClass("openingBGAnimation");
}, 1000);
setTimeout(() => {
    $(".openingBG").remove();
}, 4000);

const hamburger = $(".hamburger");
const navMenu = $(".nav-menu");

hamburger.on("click", function () {
    hamburger.toggleClass("active");
    navMenu.toggleClass("active");
});

$(".nav-link").on("click", function () {
    hamburger.removeClass("active");
    navMenu.removeClass("active");
});

$(".main-gallery").flickity({
    // options
    cellAlign: "left",
    contain: true,
});

/* FadeIn Scroll */
$(document).ready(function () {
    $(window).scroll(function () {
        $(".fade").each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ opacity: "1" }, 900);
            }
        });
    });
});
