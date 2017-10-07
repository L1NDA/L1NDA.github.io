window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if
  });

});

$(function topButton(){
  $(window).scroll($.throttle(500, function () {
    if (window.scrollY > 60) {
      $('#backToTop').fadeIn('slow');
    } else {
      $('#backToTop').fadeOut('slow');
    }
  }));
})

$(function scrollTop() {
  $('#backToTop').on('click', function(){
    // $("html, body").animate({ scrollTop: 0 }, 500);
    // return;
    $.scrollify.move("#home");
  });
})

$(function scroll() {
  $.scrollify({
    section : ".section",
    sectionName : "section-name",
  });
})

// https://github.com/jlmakes/scrollreveal

window.sr = ScrollReveal({
  duration: 500,
  delay: 500,
  distance: '10px',
  reset: true,
  scale: .95,
});
// sr.reveal('#about-1');
// sr.reveal('#about-2');
// sr.reveal('#about-3');
sr.reveal('.bar', { origin: 'left', duration: 500 }, 250);
// sr.reveal('#about-4', { delay: 1000, duration: 500 });
