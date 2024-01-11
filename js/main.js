// --responsive navbar ----

$(document).ready(function() {
  $("#mobileMenuToggle").click(function() {
    $(".responsive-nav").slideToggle();
  });
});

//   ---swiper slider main div----

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var nextButton = document.querySelector('.swiper-button-next');
var prevButton = document.querySelector('.swiper-button-prev');




nextButton.addEventListener('mouseenter', function() {
    nextButton.style.transition = '0.3s ease-in-out';
    nextButton.textContent = 'Next';
});

nextButton.addEventListener('mouseleave', function() {
    nextButton.style.transition = '0.3s ease-in-out';
    nextButton.textContent = '';
});

prevButton.addEventListener('mouseenter', function() {
    prevButton.style.transition = '0.3s ease-in-out';
    prevButton.textContent = 'Prev';
});

prevButton.addEventListener('mouseleave', function() {
    prevButton.style.transition = '0.3s ease-in-out';
    prevButton.textContent = '';
});
// ---logo section-slider---
var swiper = new Swiper(".mySwiper-logo-slider", {
slidesPerView: 1,
spaceBetween: 10,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 30,
    },
  }
});


$('.owl-carousel').owlCarousel({
  loop:true,
  dots:false,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})