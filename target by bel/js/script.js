let menuBnt  = document.querySelector('#menu-bnt');
let navbar = document.querySelector('.header .flex .navbar');

menuBnt.onclick = () =>{
    menuBnt.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".slide-parceiros", {
    spaceBetween: 30,
      centeredSlides: true,
    loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });