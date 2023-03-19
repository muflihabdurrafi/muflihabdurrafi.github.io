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
