$(function () {
  var mixer = mixitup(".categories");
});

new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: false,

  navigation: {
    nextEl: ".myslider-next",
    prevEl: ".myslider-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
const headerEl = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 100) {
    headerEl.classList.add("header_mini");
  } else {
    headerEl.classList.remove("header_mini");
  }
});
