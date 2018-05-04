document.addEventListener('DOMContentLoaded', function(){
  var wrapper = document.getElementById('wrapper');
  var topLayer = wrapper.querySelector('.top');
  var handle = wrapper.querySelector('.handle');
  var skew = 0;
  var delta = 0;

  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + skew + delta + 'px';
  });
});


// JavaScript
window.sr = ScrollReveal();

sr.reveal('h1', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('p', {
  delay: 0,
  duration: 900,
  origin: 'bottom',
  distance: '120px'
});
sr.reveal('.navbar', {
  delay: 0,
  duration: 1000,
  origin: 'bottom'  
});

sr.reveal('.showcase-l', {
  delay: 0,
  duration: 1000,
  origin: 'left',  
  distance: '100px'
});
sr.reveal('.showcase-r', {
  delay: 1,
  duration: 1000,
  origin: 'right',  
  distance: '100px'
});
sr.reveal('.btn', {
  delay: 500,
  duration: 1000,
  origin: 'bottom'
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $(window).on('scroll', function(){
    if ($(window).scrollTop()){
      $('nav').addClass('bg-light')
      //$('.bg-light').css('transition','opacity all 0.5s ease')
    }
    else{
      $('nav').removeClass('bg-light')
      //$('.bg-light').css('transition','opacity all 0.5s ease')      
    }
  });
});
