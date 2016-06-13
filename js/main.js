'use strict';

// Sidebar

$('.ui.labeled.icon.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;

$('.toggle.button')
  .removeClass('disabled')
;

$(function() {
  $("#about-me, #about-nola, #contact-me").on("click", function( e ) {
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 200);
  });
});

// Modal

$('.contact').on('click', function(){
  $('.ui.modal')
    .modal({
      blurring: true
    })
    .modal('show')
});
