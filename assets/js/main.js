$(document).ready(function(){
  var $slickFrame = $('.slide-layer');
  var slideWidth = $slickFrame.width() / 3;
  var centerPadding = (slideWidth / 4) * 3;

  $('.slide-layer').slick({
    centerMode: true,
    dots: true,
    arrows: true,
    centerPadding: centerPadding + 'px',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:`<i class="fas fa-chevron-left"></i>`,
    nextArrow:`<i class="fas fa-chevron-right"></i>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: 0,
          slidesToShow: 1
        }
      }
    ]
  });
});
