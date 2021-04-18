const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu');
const navLink = document.querySelectorAll('.nav_item');
const sideBarMask = document.querySelector('.sidebar_mask');



burger.addEventListener('click', function(){
    navMenu.classList.toggle('show_nav');
    burger.classList.toggle('rotate_burger');
    sideBarMask.classList.toggle('sidebar_mask_On')
})

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')
    navMenu.classList.remove('show_nav');
    burger.classList.remove('rotate_burger');
    sideBarMask.classList.remove('sidebar_mask_On')
   
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// window.onclick = function(event){
//     if(event.target.closest('.nav_menu')){
//         navMenu.classList.remove('show_nav');
//         burger.classList.remove('rotate_burger');
//     }
// }

const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('tog_active')
    body.classList.toggle('light');
})

