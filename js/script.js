$(document).ready(function() {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    var target = this.hash;
    if (target) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    }
  });

  // Basic contact form handler
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
