const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
});
new Swiper(".swiper", {
  direction: "horizontal",
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
    // clickable: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

var mixer = mixitup(".product-burger");
