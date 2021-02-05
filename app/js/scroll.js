// *SCROLL REVEAL*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})
sr.reveal('.home_moto', {delay: 1100})
sr.reveal('.home_btn',{delay: 1500})
sr.reveal('.home_bg', { delay: 400})


sr.reveal('.about_biography')
sr.reveal('.skill_title',{origin:'left', delay:900})
sr.reveal('.col',{origin:'bottom', delay:1200})

sr.reveal('.section_title',{origin:'left', delay:900})

sr.reveal('.ui-card',{origin:'bottom', delay:900})



// ScrollReveal().reveal('.headline');
var navBarup = document.querySelector('.nav');

var lastScrollTop = 0;
    navBar = document.querySelector('.nav');
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navBar.style.top = "-80px";
        } else{
            navBar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    })