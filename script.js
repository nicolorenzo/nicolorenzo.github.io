$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 810,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(document).ready(function () {
  'use strict';

  var c,
    currentScrollTop = 0,
    navbar = $('nav');

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass('scrollUp');
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass('scrollUp');
    }
    c = currentScrollTop;
  });
});

function loadBarsOnScroll() {
  let progressBars = document.querySelectorAll('.progress > div');

  for (let progressBar of progressBars) {
    // console.log(+progressBar.dataset.porcentagem);
    var scrollOffset = $(document).scrollTop();
    var containerOffset = progressBar.offsetTop - window.innerHeight;
    if (scrollOffset > containerOffset) {
      progressBar.style.width = progressBar.dataset.porcentagem + '%';
      // unbind event not to load scrolsl again
      // $(document).unbind('scroll');
    }
  }
}

loadBarsOnScroll();
document.addEventListener('scroll', (event) => {
  // console.log('aaaa');
  loadBarsOnScroll();
});
