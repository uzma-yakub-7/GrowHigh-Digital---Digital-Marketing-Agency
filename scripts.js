// Simple reveal on scroll
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
      reveals[i].style.opacity = 1;
      reveals[i].style.transform = 'translateY(0)';
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
