/*button addEventListsner*/

const button = document.querySelector(".content_list_more_button");
const button2 = document.querySelector(".content_list_more_button_2");
const more = document.querySelector(".more_list_card_ul");

button.addEventListener("click", function () {
  this.style.display = "none";
  more.style.display = "flex";
  button2.style.display = "inline-block";
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
