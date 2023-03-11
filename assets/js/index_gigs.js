// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// top 버튼 효과 적용
let scrollToTopButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 1000) {
    if (scrollToTopButton.style.opacity == "1") {
      scrollToTopButton.style.opacity = "0";
      scrollToTopButton.style.visibility = "hidden";
      scrollToTopButton.style.transition = "ease-in-out 0.5s";
    }
  } else if (window.pageYOffset > 2500) {
    scrollToTopButton.style.opacity = "1";
    scrollToTopButton.style.visibility = "visible";
    scrollToTopButton.style.transition = "ease-in-out 0.5s";
  }
});

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
