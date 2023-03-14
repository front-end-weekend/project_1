/*button addEventListsner*/

const button = document.querySelector(".content_list_more_button");
const button2 = document.querySelector(".content_list_more_button_2");
const more = document.querySelector(".more_list_card_ul");

button.addEventListener("click", function () {
  this.style.display = "none";
  more.style.display = "flex";
  button2.style.display = "inline-block";
});

var swiper = new Swiper(".main_swiper", {
  breakpoints: {
    1500: {
      slidesPerView: 1.7,
    },
    1300: {
      slidesPerView: 1.7,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 25,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
  },
  loop: true,
  slideToClickedSlide: true,
  speed: 1000,
  pagination: {
    el: ".banner_pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const event_swiper = new Swiper(".swiper-container.event", {
  slidesPerView: 2,
  // 동시에 보여줄 슬라이드 갯수
  slidesPerGroup: 2,
  // 그룹으로 지정할 슬라이드 갯수
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-button-next.event",
    prevEl: ".swiper-button-prev.event",
  },
});

const create_close = document.querySelector(".creater_close");
const create_banner = document.querySelector(".creater_banner");

create_close.addEventListener("click", function () {
  create_banner.style.display = "none";
});

const close_button = document.querySelector(".interest_slide_close_button");
const interest_slide_aside = document.querySelector(".interest_slide_aside");

close_button.addEventListener("click", function () {
  interest_slide_aside.style.display = "none";
});

const button_prev = document.querySelector(".tag_button_prev");
const button_next = document.querySelector(".tag_button_next");

button_next.addEventListener("click", function () {
  button_prev.style.display = "inline-block";
});
