const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
/*fazendo o menu ser visto*/
document.body.classList.toggle("show-mobile-menu");

});
/*fechando menu*/
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    
    
    pagination: {
    el: '.swiper-pagination',
    },
  
    
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    });