console.log('출력');
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 50, // 슬라이드 사이의 간격 (px)
  slidesPerView: 3, // 한 번에 한 개의 슬라이드만 보이게 설정
  slidesPerGroup: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  dynamicBullets: true,
  bulletClass: 'my-bullet-class', // Indicator의 클래스 이름
  bulletActiveClass: 'my-bullet-active-class' // 활성화된 Indicator의 클래스 이름
});

let buttons = document.querySelectorAll('.toggle-button');

for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let targetId = button.getAttribute('data-target');
  let target = document.getElementById(targetId);

  button.addEventListener('click', function () {
    if (target.style.display === 'none') {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  });
}
