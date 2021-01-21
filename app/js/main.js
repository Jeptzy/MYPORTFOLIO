const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu');
const navLink = document.querySelectorAll('.nav_item');



burger.addEventListener('click', function(){
    navMenu.classList.toggle('show_nav');
    burger.classList.toggle('rotate_burger');
})

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')
    navMenu.classList.remove('show_nav');
    burger.classList.remove('rotate_burger');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
