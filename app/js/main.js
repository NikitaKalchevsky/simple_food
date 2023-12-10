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

var links = document
  .getElementsByClassName("menu__list")[0]
  .getElementsByTagName("a");

function activateLink(index) {
  for (var i = 0; i < links.length; i++) {
    if (i === index) {
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }
}

var mixer = mixitup(".categories");
// $(function () {
//   var mixer = mixitup(".works__content");
// });
