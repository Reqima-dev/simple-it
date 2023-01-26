/*---------------- SCROLL AND CHANGE NAVBAR -----*/

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay
  autoplay: {
    delay: 1000,
  },
  // RESPONSIVE BREAKPOINTS

  breakpoints: {
    // when windows width is > = 600px

    600: {
      slidesPerView: 2,
    },
    // when windows width is > = 1024px

    1024: {
      slidesPerView: 3,
    },
  },
});

/*Date et copyright*/
const date = document.querySelector(".date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

/* fin Date et copyright*/

