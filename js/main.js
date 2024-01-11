// --responsive navbar ----

$(document).ready(function() {
  $("#mobileMenuToggle").click(function() {
    $(".responsive-nav").slideToggle();
  });
});

//   ---swiper slider main div----

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true, 
// });



// var nextButton = document.querySelector('.swiper-button-next');
// var prevButton = document.querySelector('.swiper-button-prev');


// nextButton.addEventListener('mouseenter', function() {
//     nextButton.textContent = 'Next';
// });

// nextButton.addEventListener('mouseleave', function() {
//     nextButton.textContent = '';
// });

// prevButton.addEventListener('mouseenter', function() {
//     prevButton.textContent = 'Prev';
// });

// prevButton.addEventListener('mouseleave', function() {
//     prevButton.textContent = '';
// });


///////
var swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var nextButton = document.querySelector('.swiper-button-next');
var prevButton = document.querySelector('.swiper-button-prev');

function animateContent(button, text, direction) {
  var content = document.createElement('span');
  content.textContent = text;
  content.style.opacity = '0';
  content.style.transform = `translateX(${direction === 'prev' ? '-' : ''}20px)`;
  button.appendChild(content);

  content.animate(
      [
          { opacity: '0', transform: `translateX(${direction === 'prev' ? '-' : ''}20px)` },
          { opacity: '1', transform: 'translateX(0)' },
      ],
      {
          duration: 1500, // Adjust the duration as needed
          easing: 'ease-in-out',
      }
  );

  setTimeout(function () {
      content.animate(
          [
              { opacity: '1', transform: 'translateX(0)' },
              { opacity: '0', transform: `translateX(${direction === 'prev' ? '-' : ''}20px)` },
          ],
          {
              duration: 1500, // Adjust the duration as needed
              easing: 'ease-in-out',
          }
      );

      setTimeout(function () {
          content.remove();
      }, 1500);
  }, 1500); // Adjust the duration as needed
}

nextButton.addEventListener('mouseenter', function () {
  animateContent(nextButton, 'NEXT', 'next');
});

prevButton.addEventListener('mouseenter', function () {
  animateContent(prevButton, 'PREV', 'prev');
});

nextButton.addEventListener('mouseleave', function () {
  nextButton.textContent = '';
});

prevButton.addEventListener('mouseleave', function () {
  prevButton.textContent = '';
});






// ---logo section-slider---


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