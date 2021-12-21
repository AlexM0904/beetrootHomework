console.log(1);
let contentSlider = $("#contentSlider");

contentSlider.slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: false,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    responsive: [
        {
            breakpoint: 1288,
            settings: {
                slidesToShow: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 955,
            settings: {
                slidesToShow: 1,
                arrows: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            },
        },
    ],
});

$("#content-arrow-prev").on("click", function(event) {
    event.preventDefault();

    contentSlider.slick('slickPrev');
});

$("#content-arrow-next").on("click", function(event) {
    event.preventDefault();

    contentSlider.slick('slickNext');
});



/* Header Slider
========================================== */

const headerSlider = $("#headerSlider");

$(function() {headerSlider.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
    });
});
