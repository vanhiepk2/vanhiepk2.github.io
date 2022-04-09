$('.filtering').slick({
    Speed:300,
    infinite:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
    });

    var filtered = false;
    
$('.js-filter').on('click', function(){
    if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});   

$('.filtering0').slick({
    Speed:300,
    infinite:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
    });

    var filtered0 = false;
    
$('.js-filter').on('click', function(){
    if (filtered0 === false) {
        $('.filtering0').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered0 = true;
    } else {
        $('.filtering0').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered0 = false;
    }
});  