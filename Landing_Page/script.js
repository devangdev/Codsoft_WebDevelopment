// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('#menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if(elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);