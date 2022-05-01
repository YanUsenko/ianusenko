"use strict"
const menuBtn = document.querySelector(".header__buttom");
const menu = document.querySelector(".header__nav");
const menuLink = document.querySelector(".nav__link");
const menuLink2 = document.querySelector(".nav__link2");
const menuLink3 = document.querySelector(".nav__link3");
const menuLink4 = document.querySelector(".nav__link4");
const animItems = document.querySelectorAll(".anim-items");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});
menuLink.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});
menuLink2.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});
menuLink3.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});
menuLink4.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 8;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } 
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
};