const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
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

document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded означает, когда наш документ будет готов к работе, тогда начнут работать наши скрипты

  //Mobile Menu
  const burger = document.querySelector(".burger"); //находим наш бургер по селектору класса

  burger.addEventListener("click", () => {
    //Добавляем событие "клик" на бургер

    burger.classList.toggle("burger--active"); //при клике на бургер у нас будет либо добавлятся класс, либо удаляется.
    //ВАЖНО! Мы уже работаем с данным классом, поэтому тут "." не ставим, иначе в атрибут class значение добавится с "." и работать не будет.
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //Mobile Menu
  const burger = document.querySelector(".burger"); //наша кнопка
  const mobileMenu = document.querySelector(".menu"); //мобильное меню

  const bodyLock = document.querySelector("body"); //ищем как селектор ТЕГА

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active"); //когда меню открыто
    if (mobileMenu.classList.contains("menu--active")) {
      //Проверяем, есть ли у меню активный класс
      burger.classList.add("burger--active"); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add("lock"); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      burger.classList.remove("burger--active"); //Возвращает в исходное состояние
      bodyLock.classList.remove("lock"); //Разрешаем скроллить
    }
  });
});
//Клик вне таргета
document.addEventListener("click", function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove("burger--active");
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  }
});
var mixer = mixitup(".popular-category__list");
