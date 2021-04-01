$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      infinite: true,
      responsive: [
        { 
          breakpoint: 1060,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }, {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
    });
  });
  