$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      infinite: true,
      responsive: [
        { 
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  });
  