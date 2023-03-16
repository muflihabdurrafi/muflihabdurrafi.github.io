function typing_animation() {
    let title = ["Web Developer", "Front End Developer", "Full Stack Developer"];
    let titleSelector = $(".rollingTitle");
    let i = 0;
    let j = 0;
    let displayArray = [];
    let titleArray, tempLength;

    changeTitle();

    window.setInterval(function () {
        if (j == tempLength) {
            window.setTimeout(function () {
                displayArray = [];
                j = 0;
                changeTitle();
            }, 1000);
        }
        displayArray.push(titleArray[j]);
        titleSelector.html(displayArray.join(""));

        j++;
    }, 100);

    function changeTitle() {
        titleArray = title[i].split("");
        tempLength = title[i].length;
        if (i === 2) {
            i = 0;
        } else {
            i++;
        }
    }
}

typing_animation();

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
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
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
