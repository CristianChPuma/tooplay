require('../css/app.scss');


$(document).ready(function(){

  window.sr = ScrollReveal({ duration: 2000 });
  sr.reveal('.scrollrevealitem', 50);

  $('.navigation').click(function() {
    $(this).toggleClass('active');
});

});
