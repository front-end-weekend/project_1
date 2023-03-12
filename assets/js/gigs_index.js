// Swiper fade 효과 적용
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    speed: 2000,
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

// 헤더 안내문구
function showGuide() {
  let sideGuide = document.getElementById("guide_id");
  sideGuide.display = "block";
  console.log(sideGuide);
  setTimeout(function () {
    sideGuide.style.display = "none";
  }, 5000);
}

(function () {
  showGuide();
})();
