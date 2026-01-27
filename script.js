//change navbar style on scroll

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menu.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav);


window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
});



const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    // Toggle the vertical menu
    navMenu.classList.toggle('active');

    // Swap the icons
    if (navMenu.classList.contains('active')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});