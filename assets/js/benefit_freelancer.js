console.log('출력');

swiper = new Swiper('.mySwiper', {
  spaceBetween: 50, // 슬라이드 사이의 간격 (px)
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  slideWidth: 1000,
  initialSlide: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  dynamicBullets: true,
  bulletClass: 'my-bullet-class', // Indicator의 클래스 이름
  bulletActiveClass: 'my-bullet-active-class',
  breakpoints: {
    820: {
      enabled: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      slidesPerView: 3,
      slideWidth: 300,
      spaceBetween: 50 // 슬라이드 사이의 간격 (px)
    }
  }
});

let buttons = document.querySelectorAll('.toggle-button');
let arrows = document.querySelectorAll('.arrow_ud');

for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let arrow = arrows[i];

  let targetId = button.getAttribute('data-target');
  let target = document.getElementById(targetId);

  button.addEventListener('click', function () {
    if (target.style.display === 'none') {
      target.style.display = 'flex';
      target.classList.add('ans_bg');
    } else {
      target.style.display = 'none';
      target.classList.remove('ans_bg');
    }
    if (arrow.classList.contains('upside_down')) {
      arrow.classList.remove('upside_down');
    } else {
      arrow.classList.add('upside_down');
    }
  });
}
