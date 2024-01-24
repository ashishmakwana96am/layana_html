// --responsive navbar ----

$(document).ready(function() {
  $("#mobileMenuToggle").click(function() {
    $(".responsive-nav").slideToggle();
  });
});


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
  stagePadding: 50,
  responsive:{
      0:{
          items:2,
          stagePadding: 20,
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

// header select option

$('.hidden p').click(function() {
  var selectedText = $(this).text();
  var selectedValue = $(this).attr('value');

  // Update the text and value in the main dropdown area
  $(this).closest('.select').find('.input').text(selectedText);
  $(this).closest('.select').find('input').val(selectedValue);
  $(this).closest('.select').trigger("change");

  // Hide the selected option in the dropdown
  $(this).hide();

  // Show the remaining options
  $(this).siblings().show();
});



// tabs js
// Set the first tab as active initially
var initialTab = document.querySelector('.tab:first-child');
initialTab.style.borderBottom = '2px solid #000000';
initialTab.classList.add('active');

function showTab(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
      tabContent.style.display = 'none';
  });

  // Show the selected tab content
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
      selectedTab.style.display = 'block';
  }

  $('.tab-container').find(".active").removeClass("active");
  var currentTab = tabId.split('_');
  $('.tab-container .tab:nth-child('+currentTab[1]+')').addClass("active");
  

}















