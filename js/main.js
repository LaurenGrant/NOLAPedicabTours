'use strict';

$('.ui.labeled.icon.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;
$('.toggle.button')
  .removeClass('disabled')
;

$('.contact').on('click', function(){
  $('.ui.modal')
    .modal({
      blurring: true
    })
    .modal('show')
});
