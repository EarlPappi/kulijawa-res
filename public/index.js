const mobileIcon = document.querySelector('#mobile-button');
const mobileMenu = document.querySelector('#mobile-menu');

console.log(mobileIcon);

mobileIcon.addEventListener('click', function(e){
    console.log('you clicked me')
    mobileMenu.classList.toggle('hidden');
});