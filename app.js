const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    navbar.classList.toggle('toggledNav');
    hamburger.classList.toggle('toggledHam');
});