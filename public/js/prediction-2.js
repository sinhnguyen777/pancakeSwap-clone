$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    startPosition: 3,
    margin: 10,
    responsiveClass: true,
    loop: false,
    nav:true,
    margin: 10,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
});
